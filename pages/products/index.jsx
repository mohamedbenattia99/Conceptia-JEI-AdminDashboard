import React, { Component } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import {Select, Pagination, Spin} from 'antd';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import {getProducts, getTotalProducts} from "~/store/products/action";
import {getOrders} from "~/store/orders/action";
import TableProjectItems from "~/components/shared/tables/TableProjectItems";
import {getProductCategories} from "~/store/products/action";
import {getProductsByKeyword , getProductByProductNumber} from "~/store/products/action";
import {LoadingOutlined} from "@ant-design/icons";

const { Option } = Select;
class ProductPage extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            searchParam :'',
            keyword: '',
            values: ["id", "name", "ref", "price", "category","edit"],

        };

    }



    componentDidMount() {

        const params = {
            _start: 0,
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
        this.props.dispatch(getProducts(params));
    }

    handleSelectParameter(value){
        this.setState({searchParam :value}) ;
    }

    handleAnnuler (){
        const params = {
            _start: 0,
            _limit: 10,
        };
        this.props.dispatch(toggleDrawerMenu(false))
        this.props.dispatch(getTotalProducts())
        this.props.dispatch(getProductCategories())
        this.props.dispatch(getProducts(params))
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
    handleChange = (e) => {
        this.setState({ values: e });
    }

        render(){
            const productsLoading = this.props.productsLoading ;
            const allProducts =this.props.allProducts ;
            const total = this.props.totalProducts ;
            const antIcon = <LoadingOutlined style={{ fontSize: 50 , color :'red' ,  position: 'fixed ', left: '50%', top: '60%'}
            } spin />;

            return (
                <ContainerDefault title="produits" >
                    <HeaderDashboard
                        title="Products"
                        description="RED SYS Product Listing "
                    />
                    <section className="ps-items-listing" style={{position:"relative"}}>
                        <div className="ps-section__actions">
                            <Link href="/products/create-product">
                                <a className="ps-btn success">
                                    <i className="icon icon-plus mr-2" />
                                    Nouveau Produit
                                </a>
                            </Link>
                        </div>
                        <div className="form-group">
                            <Select
                                placeholder="Séléctionnez les colonnes"
                                mode="multiple"
                                allowClear
                                className="ps-ant-dropdown"
                                style={{ height: '100%' }}
                                defaultValue={["id", "name", "ref", "price", "category","edit"]}
                                onChange={this.handleChange}
                            >
                                <Option value="id"
                                        selected={this.state.values.includes("id")}
                                >
                                    ID
                                </Option>
                                <Option value="name"
                                        selected={this.state.values.includes("name")}
                                >
                                    Nom
                                </Option>
                                <Option value="ref"
                                        selected={this.state.values.includes("ref")}
                                >
                                    Référence
                                </Option>
                                <Option value="numArt"
                                        selected={this.state.values.includes("numArt")}
                                >
                                    N° d'article
                                </Option>
                                <Option value="stock"
                                        selected={this.state.values.includes("stock")}
                                >
                                    stock
                                </Option>

                                <Option value="price"
                                        selected={this.state.values.includes("price")}
                                >
                                    Prix
                                </Option>
                                <Option value="salePrice"
                                        selected={this.state.values.includes("salePrice")}
                                >
                                    Prix de vente
                                </Option>
                                <Option value="category"
                                        selected={this.state.values.includes("category")}
                                >
                                    category
                                </Option>
                                <Option value="edit"
                                        selected={this.state.values.includes("edit")}
                                >
                                    edit
                                </Option>

                            </Select>
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
                                                numéro d'article
                                            </Option>
                                        </Select>
                                    </div>


                                    <div className="ps-form__right">
                                        <button className="ps-btn ps-btn--gray" disabled={this.state.searchParam===''}
                                                onClick={this.handleAnnuler.bind(this)}>
                                            annuler
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
                        { productsLoading  || !(Array.isArray(allProducts)) ?  <Spin indicator={antIcon}/> :
                           ( <>
                               <div className="ps-section__content">
                                <TableProjectItems values={this.state.values}/>
                            </div>

                            <div className="ps-section__footer">
                            <Pagination
                            total={total-1}
                            pageSize={20}
                            responsive={true}
                            defaultCurrent={1}
                            onChange={this.handlePagination.bind(this)}
                            />
                            </div>
                               </>
                               )
                        }
                    </section>
                </ContainerDefault>
            );
        }
};
export default connect((state) => state.products)(ProductPage);
