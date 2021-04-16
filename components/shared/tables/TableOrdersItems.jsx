import React, { Component, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getOrders } from '~/store/orders/action';



class TableOrdersItems extends Component {


    constructor(props) {
        super(props);
    }

    // state = useSelector(state => ({
    //     ...state.allOrders
    // }))
    componentDidMount() {
        this.props.dispatch(getOrders());
    }


    render() {

        const tableItemsView = this.props?.allOrders?.map((item) => {
            let badgeView, fullfillmentView;
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
            if (item.payment) {
                badgeView = <span className="ps-badge success">Paid</span>;
            } else {
                badgeView = <span className="ps-badge gray">Unpaid</span>;
            }
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
                    <td>{badgeView}</td>
                    <td>{fullfillmentView}</td>
                    <td>
                        <strong>{item.total}</strong>
                    </td>
                    <td>
                        <DropdownAction />
                    </td>
                </tr>
            );
        });

        return (
            <div className="table-responsive">
                <table className="table ps-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Produit</th>
                            <th>Payement</th>
                            <th>Accomplissement</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{tableItemsView}</tbody>
                </table>
            </div>
        );
    }
};

export default connect(state => state.app)(TableOrdersItems);
