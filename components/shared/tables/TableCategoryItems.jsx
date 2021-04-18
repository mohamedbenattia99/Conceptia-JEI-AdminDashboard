import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableCategoryItems extends Component {





    render() {
        const allCategories =this.props.allCategories ;
        const categoriesLoading = this.props.categoriesLoading ;
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
                        {!(categoriesLoading) && typeof (allCategories)==='array'? allCategories.map((item) => {
                            <tr>
                                <td>
                                    <strong>{item.title}</strong>
                                </td>
                                <td>{item.slug}</td>
                                <td>{item.date}</td>
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
                        }):null}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default connect(state => state.categories)(TableCategoryItems);
