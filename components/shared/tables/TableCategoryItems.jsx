import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getProductCategories } from '~/store/products/action';

class TableCategoryItems extends Component {

    // const dispatch = useDispatch();
    // const fetchCategories = () => {
    //     dispatch(getProductCategories());
    // }

    // const state = useSelector(state => ({
    //     ...state.categories
    // }))

    // useEffect(() => {
    //     dispatch(fetchCategories());
    // }, [dispatch]);

    componentDidMount() {
        this.props.dispatch(getProductCategories());
    }

    render() {

        return (
            <div className="table-responsive" >
                <table className="table ps-table">
                    <thead>
                        <tr>
                            <th>Nom de la catégorie</th>
                            <th>Slug</th>
                            <th>Creé le</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.categories && this.props.categories?.map((item) => {
                            <tr>
                                <td>
                                    <strong>{categories.title}</strong>
                                </td>
                                <td>{categories.slug}</td>
                                <td>{categories.date}</td>
                                <td>
                                    <div className="dropdown">
                                        <a
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <i className="icon-ellipsis"></i>
                                        </a>
                                        <div
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">
                                                Editer
                                        </a>
                                            <a className="dropdown-item" href="#">
                                                Supprimer
                                        </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default connect(state => state.app)(TableCategoryItems);
