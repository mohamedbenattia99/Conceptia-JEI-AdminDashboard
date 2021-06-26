import React, { Component, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Checkbox,Popconfirm,Button} from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { connect} from 'react-redux';
import {validateOrder} from "~/store/orders/action";


class TableOrdersItems extends Component {


    constructor(props) {
        super(props);
        this.state ={
            valid : false ,
            visibility:true ,
        }
    }


     handleValidate (item){
        const data =item
        data.valid =!(data.valid) ;
        this.props.dispatch(validateOrder(data.id,data)) ;
    }


    render() {


        const allOrders =this.props.allOrders ;
        const ordersLoading =this.props.ordersLoading;

    console.log(allOrders)
    console.log(ordersLoading)
    console.log(Array.isArray(allOrders))


        const tableItemsView = (!(ordersLoading) && Array.isArray(allOrders) )? allOrders.map((item) => {
            console.log(item.productName)
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
                case 'Success':
                    fullfillmentView = (
                        <span className="ps-fullfillment success">delivered</span>
                    );
                    break;
                case 'Cancel':
                    fullfillmentView = (
                        <span className="ps-fullfillment danger">Cancel</span>
                    );

                    break;
                default:
                    fullfillmentView = (
                        <span className="ps-fullfillment warning">In Progress</span>
                    );
                    break;
            }
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        {}
                    </td>
                    <td>
                        <strong>{item.date}</strong>
                    </td>
                    <td>{item.productNumber}</td>
                    <td>{item.customerName}</td>
                    <td>{item.customerPhoneNumber}</td>
                    <td>put customer mail in here</td>
                    <td>{fullfillmentView}</td>
                    <td>
                        <strong>{item.total}</strong>
                    </td>
                    <td>
                        <Button color={item.valid ? "success":"danger"}>{item.valid ? 'validé':'non validé'}</Button>
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
