// on a plus besoin de ce composant

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const TableCustomerItems = () => {

    const customers = () => {
        const dispatch = useDispatch();
        const { name, phone, balance, orders, status } = useSelector(
            state => ({
                name: state.name,
                phone: state.phone,
                balance: state.balance,
                orders: state.orders,
                status: state.status
            })
        );
    }

    useEffect(() => {
        dispatch();
    }, [dispatch]);

    const tableItemsView = customers.map((item, index) => {
        let badgeView;

        if (item.status) {
            badgeView = <span className="ps-badge success">active</span>;
        } else {
            badgeView = <span className="ps-badge gray">deactive</span>;
        }

        return (
            <tr key={index}>
                <td>{index}</td>
                <td>
                    <strong>{item.name}</strong>
                </td>
                <td>{item.phone}</td>
                <td>{item.balance}</td>
                <td>{item.orders}</td>
                <td>{badgeView}</td>
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
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Balances</th>
                        <th>Total orders</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItemsView}</tbody>
            </table>
        </div>
    );
};

export default TableCustomerItems;
