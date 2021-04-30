import React, { Component, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Checkbox } from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { connect} from 'react-redux';



class TableOrdersItems extends Component {


    constructor(props) {
        super(props);
    }




    render() {
        const ordersLoading =this.props.orderLoading;
        const orders =this.props.orders ;
        const tableItemsView = !(ordersLoading) && typeof (orders) =='array' ?orders.map((item) => {
            let  fullfillmentView;
            const menuView = (
                <Menu>
                    <Menu.Item key={0}>
                        <a className="dropdown-item" href="#">
                            Editer
                        </a>
                    </Menu.Item>
                    <Menu.Item key={0}>
                        <a className="dropdown-item" href="#">
                            <i className="icon-t"></i>
                            Supprimer
                        </a>
                    </Menu.Item>
                </Menu>
            );

            switch (item.fullfillment) {
                case 'In Progress':
                    fullfillmentView = (
                        <span className="ps-fullfillment warning">In Progress</span>
                    );
                    break;
                case 'Cancel':
                    fullfillmentView = (
                        <span className="ps-fullfillment danger">Cancel</span>
                    );
                    break;
                default:
                    fullfillmentView = (
                        <span className="ps-fullfillment success">delivered</span>
                    );
                    break;
            }
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        <Link href="/orders/order-detail">
                            <a>
                                <strong>{item.product}</strong>
                            </a>
                        </Link>
                    </td>
                    <td>
                        <strong>{item.date}</strong>
                    </td>
                    <td>{item.productNumber}</td>
                    <td>{item.customerName}</td>
                    <td>{item.customerPhoneNumber}</td>
                    <td>{item.customerEmail}</td>
                    <td>{fullfillmentView}</td>
                    <td>
                        <strong>{item.total}</strong>
                    </td>
                    <td>
                        <Checkbox>Valider</Checkbox>
                    </td>
                    <td>
                        <DropdownAction />
                    </td>
                </tr>
            );
        }): null ;

        return (
            <div className="table-responsive">
                <table className="table ps-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Produit</th>
                            <th>n° d'article</th>
                            <th>nom du client </th>
                            <th>numéro de telephone</th>
                            <th>email du client </th>
                            <th>Accomplissement</th>
                            <th>Total</th>
                            <th>Valider</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{tableItemsView}</tbody>
                </table>
            </div>
        );
    }
};

export default connect(state => state.orders)(TableOrdersItems);
