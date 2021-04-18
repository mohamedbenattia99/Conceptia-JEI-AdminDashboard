import React, {Component} from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import TableCategoryItems from '~/components/shared/tables/TableCategoryItems';
import { Pagination}from 'antd';

import FormCreateCategory from '~/components/shared/forms/FormCreateCategory';
import FormSearchSimple from '~/components/shared/forms/FormSearchSimple';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import {getTotalCategories,getCategories} from "~/store/categories/action";
import {getCollectionCategories} from "~/store/collections/action"
class CategoriesPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword :"" ,
        }
    }


    componentDidMount() {

        const params = {
            _start: 1,
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
        });


    }}

        render(){
        const total = this.props.totalCategories
            return (
                <ContainerDefault>
                    <HeaderDashboard
                        title="Categories"
                        description="RED SYS Category Listing"
                    />
                    <section className="ps-dashboard ps-items-listing">
                        <div className="ps-section__left">
                            <div className="ps-section__header">
                                <form
                                    className="ps-form--search-simple"
                                    onSubmit={(event => {event.preventDefault();
                                        const params = [this.state.keyword]
                                        this.props.dispatch(getCollectionCategories(params))

                                        console.log('handle search' + this.state.keyword)
                                    })}
                                    >
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search..."
                                        onChange={(event    )=>{this.handleSearch(event)}}

                                    />
                                    <button>
                                        <i className="icon icon-magnifier"></i>
                                    </button>
                                </form>
                            </div>
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
