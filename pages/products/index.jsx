import React, { Component } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import { Select , Pagination}from 'antd';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import {getProducts, getTotalProducts} from "~/store/products/action";
import {getOrders} from "~/store/orders/action";
import TableProjectItems from "~/components/shared/tables/TableProjectItems";
import {getProductCategories} from "~/store/products/action";
import {getProductsByKeyword , getProductByProductNumber} from "~/store/products/action";

const { Option } = Select;
class ProductPage extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            searchParam :'',
            keyword: '',
        };

    }



    componentDidMount() {

        const params = {
            _start: 1,
            _limit: 10,
        };
        this.props.dispatch(toggleDrawerMenu(false))
        this.props.dispatch(getTotalProducts())
        this.props.dispatch(getProductCategories())
        this.props.dispatch(getProducts(params))
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
                    this.props.dispatch(getProductsByKeyword(keyword))
                } else if(this.state.searchParam=="productNumber"){
                    console.log('searchparam = product number')
                        this.props.dispatch(getProductByProductNumber(keyword))
                }



    }
    }


        render(){
            const total = this.props.totalProducts ;
            const categories =this.props.categories ;
            const categoriesLoading =this.props.categoriesLoading ;

            return (
                <ContainerDefault title="Products">
                    <HeaderDashboard
                        title="Products"
                        description="RED SYS Product Listing "
                    />
                    <section className="ps-items-listing">
                        <div className="ps-section__actions">
                            <Link href="/products/create-product">
                                <a className="ps-btn success">
                                    <i className="icon icon-plus mr-2" />
                                    Nouveau Produit
                                </a>
                            </Link>
                        </div>
                        <div className="ps-section__header">
                            <div className="ps-section__filter">
                                <form
                                    className="ps-form--filter"
                                    onSubmit={
                                        (event) => {event.preventDefault()}}

                                    >

                                    <div className="form-group">
                                        <Select
                                            onSelect = { (value)=>{this.handleSelectParameter(value)}}
                                            placeholder="paramètre de recherche "
                                            className="ps-ant-dropdown"
                                            listItemHeight={20}>
                                            <Option value="productName">
                                                nom du produit
                                            </Option>
                                            <Option value="productNumber">
                                                Référence du produit
                                            </Option>
                                        </Select>
                                    </div>

                                    <div className="ps-form__left">
                                        <div className="form-group">
                                            <Select
                                                placeholder="selectionnez la catégorie"
                                                className="ps-ant-dropdown"
                                                listItemHeight={20}>


                                              {!(categoriesLoading) && typeof(categories)=="array" ? categories.map(
                                                        item=>{
                                                            return <Option  value={item.slug}>item.slug</Option>
                                                        })
                                                    :null}

                                            </Select>
                                        </div>


                                    </div>
                                    <div className="ps-form__right">
                                        <button className="ps-btn ps-btn--gray">
                                            <i className="icon icon-funnel mr-2"></i>
                                            Filtrer
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="ps-section__search">
                                <form
                                    className="ps-form--search-simple"
                                    onSubmit={(event )=> {event.preventDefault()}}
                                >
                                    <input
                                        disabled={this.state.searchParam===''}
                                        className="form-control"
                                        type="text"
                                        placeholder="recherche produit ... "
                                        onChange={(event    )=>{this.handleSearch(event)}}
                                    />
                                    <button>
                                        <i className="icon icon-magnifier"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="ps-section__content">
                            <TableProjectItems />

                        </div>
                        <div className="ps-section__footer">
                            <Pagination
                                total={total-1}
                                pageSize={10}
                                responsive={true}
                                defaultCurrent={1}
                                onChange={this.handlePagination.bind(this)}
                            />
                        </div>
                    </section>
                </ContainerDefault>
            );
        }
};
export default connect((state) => state.products)(ProductPage);
