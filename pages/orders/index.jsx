import React, { Component } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import TableOrdersItems from '~/components/shared/tables/TableOrdersItems';
import { Select , Pagination}from 'antd';

import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import {getOrders, getTotalOrders,getOrderById,getOrdersByProductName} from "~/store/orders/action";
import {Option} from "antd/lib/mentions";

class OrdersPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            keyword :'' ,
            searchParam:'',
        }
    }


    componentDidMount() {

        const params = {
            _start: 1,
            _limit: 12,
        };
        this.props.dispatch(toggleDrawerMenu(false))
        this.props.dispatch(getTotalOrders())
        this.props.dispatch(getOrders(params))
    }

     handlePagination (page, pageSize) {
        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize,
        };
        this.props.dispatch(getOrders(params));
    }

    handleSelectParameter(value){
        this.setState({searchParam :value}) ;
    }

    handleSearch(e) {
        if (e.target.value !== '') {
            const keyword = e.target.value;
            this.setState({
                keyword: e.target.value
            });

            if(this.state.searchParam=="productName") {
                console.log('searchparam = product name')
                this.props.dispatch(getOrdersByProductName(keyword))
            } else if(this.state.searchParam=="ID"){
                console.log(typeof(parseInt(this.state.keyword)))
                this.props.dispatch(getOrderById(keyword))
            }



        }
    }

    render(){
        const total = this.props.totalOrders ;

        return (
            <ContainerDefault>
                <HeaderDashboard
                    title="Orders"
                    description="RED SYS Orders Listing"
                />
                <section className="ps-items-listing">
                    <div className="ps-section__header simple">
                        <div className="ps-section__filter">
                            <form
                                onSubmit={(e)=>{e.preventDefault()}}
                                className="ps-form--filter"
                                >
                                <div className="ps-form__left">
                                    <div className="form-group">
                                        <input
                                            disabled={this.state.searchParam===''}
                                            onChange={(e)=>{this.handleSearch(e)}}
                                            className="form-control"
                                            type="text"
                                            placeholder="Search..."
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Select
                                            onSelect={(value)=>{this.handleSelectParameter(value)}}
                                            placeholder=" paramètre de recherche "
                                            className="ps-ant-dropdown"
                                            listItemHeight={20}>
                                            <Option value='productName'> nom du produit </Option>
                                            <Option value='ID'> ID </Option>
                                         </Select>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="ps-section__actions">
                            <Link href="/products/create-product">
                                <a className="ps-btn success">
                                    <i className="icon icon-plus mr-2"></i>Nouvelle commande
                                </a>
                            </Link>
                            <a
                                className="ps-btn ps-btn--gray"
                                href="new-order.html">
                                <i className="icon icon-download2 mr-2"></i>Exporter
                            </a>
                        </div>
                    </div>
                    <div className="ps-section__content">
                        <TableOrdersItems />
                    </div>
                    <div className="ps-section__footer">
                        <Pagination
                            total={total - 1}
                            pageSize={10}
                            responsive={true}
                            defaultCurrent={1}
                            onChange={(page, pageSize)=>{this.handlePagination(page,pageSize)}}
                        />
                    </div>
                </section>
            </ContainerDefault>
        );
    }
};
export default connect((state) => state.orders)(OrdersPage);
