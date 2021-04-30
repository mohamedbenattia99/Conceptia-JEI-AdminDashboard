import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { getProducts } from '~/store/products/action';

class TableProjectItems extends Component {





    render() {

    console.log(this.props.productLoading);
    const allProducts =this.props.allProducts ;
    const tableItems = !(this.props.productLoading) && typeof(allProducts)=="array"? this.props.allProducts.map((item, index) => {
            let badgeView;
            if (item.stock) {
                badgeView = <span className="ps-badge success">Stock</span>;
            } else {
                badgeView = <span className="ps-badge gray">Out of stock</span>;
            }
            return (
                <tr key={item.sku}>
                    <td>{index + 1}</td>
                    <td>
                        <a href="#">
                            <strong>{item.name}</strong>
                        </a>
                    </td>
                    <td>{item.sku}</td>
                    <td>{item.productNumber}</td>
                    <td>{badgeView}</td>
                    <td>
                        <strong>{item.price}</strong>
                    </td>
                    <td>
                        <strong>{item.sale_price}</strong>
                    </td>
                    <td>
                        <p className="ps-item-categories">
                            {item.categories.map((cat) => (
                                <a href="#" key={cat.name}>
                                    {cat.name}
                                </a>
                            ))}
                        </p>
                    </td>
                    <td>{item.date}</td>
                    <td>
                        <DropdownAction />
                    </td>
                </tr>
            );
        }) :null ;

        return (
            <div className="table-responsive">
                <table className="table ps-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>référence</th>
                            <th>n° d'article</th>
                            <th>Stock</th>
                            <th>Prix</th>
                            <th>prix de vente</th>
                            <th>Catégories</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{tableItems}</tbody>
                </table>
            </div>
        );
    }
};

export default connect(state => state.products)(TableProjectItems);
