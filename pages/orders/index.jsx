import React, { Component } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import TableOrdersItems from '~/components/shared/tables/TableOrdersItems';
import {Select, Pagination, notification} from 'antd';

import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import {getOrders, getTotalOrders,getOrderById,getOrdersByProductName} from "~/store/orders/action";
import {Option} from "antd/lib/mentions";
import {deleteProduct} from "~/repositories/Repository";

class OrdersPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            keyword :'' ,
            searchParam:'',
        }
    }


    handleExport () {
    }

    componentDidMount() {

        const params = {
            _start: 0,
            _limit: 20,
            _sort : "date:DESC"
        };
        this.props.dispatch(toggleDrawerMenu(false))
        this.props.dispatch(getTotalOrders())
        this.props.dispatch(getOrders(params))
    }

     handlePagination (page, pageSize) {
        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize,
            _sort : "date:DESC"
        };
        this.props.dispatch(getOrders(params));
    }

    handleSelectParameter(value){
        this.setState({searchParam :value}) ;
    }

    handleSearch(e) {
        if (e.target.value !== '') {
            const key = e.target.value

            if(this.state.searchParam=="ID"){

                if(!isNaN(e.target.value)){
                    this.setState({
                        keyword: e.target.value
                    });
                    this.props.dispatch(getOrderById(parseInt(key)))

                }else {
                    notification.open({
                        message: 'valeur non valide',
                        description: 'case ID doit être un entier ',
                        duration: 500,
                        type : "warning"
                    });
                        e.target.value = '';
                        this.setState({keyword: ''})
                    }
            }


            }



        }


    render(){
        const total = this.props.totalOrders ;
        const allOrders = this.props.allOrders ;


        return (
            <ContainerDefault >
                <HeaderDashboard
                    title="Orders"
                    description="RED SYS Orders Listing"
                />
                <section className="ps-items-listing" style={{overflowX: "scroll" , maxWidth:'100%'}} >
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
                                            <Option value='ID'> ID </Option>
                                         </Select>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="ps-section__actions">

                            <a  on onClick={this.handleExport}
                                className="ps-btn ps-btn--gray"
                                href="new-order.html">
                                <i className="icon icon-download2 mr-2"></i>Exporter
                            </a>
                        </div>
                    </div>
                    <div className="ps-section__content" >
                        <TableOrdersItems  style={{ marginRight :'50px'}}/>
                    </div>
                    <div className="ps-section__footer">
                        <Pagination
                            total={total - 1}
                            pageSize={20}
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
