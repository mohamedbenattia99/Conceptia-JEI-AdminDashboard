import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '~/store/orders/action';

const TableOrderSummary = () => {

    const dispatch = useDispatch();
    const fetchOrderItems = () => {
        dispatch(getOrders());
    }

    const state = useSelector(state => ({
        ...state.allOrders
    }))

    useEffect(() => {
        dispatch(fetchOrderItems());
    }, [dispatch]);



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
                <tbody>
                    {state?.allOrders?.map((item) => {
                        let badgeView, fullfillmentView;
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
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <strong>{item.date}</strong>
                            </td>
                            <td>
                                <a href="order-detail.html">
                                    <strong>{item.product}</strong>
                                </a>
                            </td>
                            <td>
                                <span className="ps-badge success">{badgeView}</span>
                            </td>
                            <td>
                                <span className="ps-fullfillment success">
                                    {fullfillmentView}
                                </span>
                            </td>
                            <td>
                                <strong>{item.total}</strong>
                            </td>
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
    )
};

export default TableOrderSummary;
