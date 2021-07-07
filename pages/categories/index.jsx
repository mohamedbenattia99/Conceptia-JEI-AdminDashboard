import React, {Component} from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import TableCategoryItems from '~/components/shared/tables/TableCategoryItems';
import {Pagination, Spin} from 'antd';

import FormCreateCategory from '~/components/shared/forms/FormCreateCategory';
import FormSearchSimple from '~/components/shared/forms/FormSearchSimple';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import {getTotalCategories,getCategories} from "~/store/categories/action";
import {getCollectionCategories} from "~/store/collections/action"
import {LoadingOutlined} from "@ant-design/icons";
class CategoriesPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword :"" ,
        }
    }


    componentDidMount() {

        const params = {
            _start: 0,
            _limit: 10,
        };
        this.props.dispatch(toggleDrawerMenu(false))
        this.props.dispatch(getTotalCategories())
        this.props.dispatch(getCategories(params))
    }


    handlePagination (page, pageSize) {
        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize,
        };
        this.props.dispatch(getCategories(params));
    }



     handleSearch (e) {
    if (e.target.value !== '') {
        const keyword = e.target.value;
        this.setState({
            keyword: e.target.value
        })
        const params ={title_contains:keyword,  _start: 0 ,
            _limit: 10}
        this.props.dispatch(getCategories(params))

        ;


    }}

        render(){
        const total = this.props.totalCategories
            const antIcon = <LoadingOutlined style={{ fontSize: 50 , color :'red' ,  position: 'fixed ', left: '50%', top: '60%'}
            } spin />;
            const allCategories =this.props.allCategories ;
            const categoriesLoading =this.props.categoriesLoading
            return (
                <ContainerDefault>
                    <HeaderDashboard
                        title="Categories"
                        description="RED SYS Category Listing"
                    />
                    <section className="ps-dashboard ps-items-listing">
                        <div className="ps-section__left">
                            {!categoriesLoading && Array.isArray(allCategories) ?
                                <>
                                    <div className="ps-section__content">

                                <TableCategoryItems />
                                <div className="ps-section__footer">
                                    <Pagination
                                        total={total - 1}
                                        pageSize={10}
                                        responsive={true}
                                        defaultCurrent={1}
                                        onChange={this.handlePagination.bind(this)}
                                    />
                                </div>
                            </div>
                                </>: <Spin indicator={antIcon}/> }
                        </div>
                        <div className="ps-section__right">
                            <FormCreateCategory />
                        </div>
                    </section>
                </ContainerDefault>
            );
        }
};

export default connect((state) => state.categories)(CategoriesPage);
