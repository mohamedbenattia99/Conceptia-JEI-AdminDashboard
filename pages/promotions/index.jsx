import React, {Component} from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import FormCreateCategory from '~/components/shared/forms/FormCreateCategory';
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




        render(){
            return (
                <ContainerDefault>
                    <HeaderDashboard
                        title="Promotions"
                        description="RED SYS Promotions Listing"
                    />
                    <section className="ps-dashboard ps-items-listing">
                        <div className="ps-section__right">
                            <FormCreateCategory />
                        </div>
                    </section>
                 </ContainerDefault>
             );
        }
};

export default connect((state) => state.categories)(CategoriesPage);