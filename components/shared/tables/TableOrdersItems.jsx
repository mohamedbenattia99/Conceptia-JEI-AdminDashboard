import React, { Component, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Checkbox,Popconfirm,Button} from 'antd';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { connect} from 'react-redux';
import {validateOrder} from "~/store/orders/action";
import {CheckOutlined, QuestionCircleOutlined} from '@ant-design/icons'

class TableOrdersItems extends Component {


    constructor(props) {
        super(props);
        this.state ={
            valid : false ,
            visibility:true ,
        }
    }



    render() {

        const handleValidate = (e,item,condition)=> {
            this.props.dispatch(validateOrder(item.id, {fullfillment: condition, valid: !item.valid}))
        }

        const handleDeliver = (e,item)=> {
            this.props.dispatch(validateOrder(item.id, {delivered : !item.delivered ,fullfillment :item.delivered? 'Cancel':'livré'} ))
        }
        const allOrders =this.props.allOrders ;
        const ordersLoading =this.props.ordersLoading;

    console.log(allOrders)
    console.log(ordersLoading)
    console.log(Array.isArray(allOrders))

        const tableItemsView = (!(ordersLoading) && Array.isArray(allOrders) )? allOrders.map((item) => {
            const condition = item.delivered  ? "livré" : item.valid ? "Cancel" : "en cours de livraison "

            let  fullfillmentView;


            switch (item.fullfillment) {
                case 'livré':
                    fullfillmentView = (
                        <span className="ps-fullfillment success">delivered</span>
                    );
                    break;
                case 'Cancel':
                    fullfillmentView = (
                        <span className="ps-fullfillment danger">Cancel</span>
                    );

                    break;
                case "en cours de livraison ":
                    fullfillmentView = (
                        <span className="ps-fullfillment warning">en cours de livraison </span>
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
                        <strong>{item.date}</strong>
                    </td>
                    <td>
                        <ol type={"I"}>
                        {item.order_products ? item.order_products.map(prod =><><li >{prod.productName}</li><br></br></>):'no products'}
                        </ol>
                    </td>
                    <td>
                        <ol type={"I"}>
                            {item.order_products ? item.order_products.map(prod =><><li >{prod.productNumber}</li><br></br></>):'no products'}
                        </ol>
                    </td>
                    <td>{item.customerName}</td>
                    <td>{item.customerPhoneNumber}</td>
                    <td ><p>{item.user && item.user.email ?item.user.email :'email non fourni'}</p></td>
                    <td>{fullfillmentView}</td>
                    <td>
                        <strong>{item.total}</strong>
                    </td>
                    <td>                <Popconfirm onConfirm={(e)=>(handleValidate(e,item,condition))} title="Etes-vous sûr que vous voulez changer？" icon={<QuestionCircleOutlined style={{ color: 'red' }}  />}>
                    <Button  type={"default"} danger={!item.valid}  disabled={item.delivered}>{item.valid ? 'validé':'non validé'} </Button> </Popconfirm>
                    </td>
                    <td>
                        <Popconfirm onConfirm={(e)=>(handleDeliver(e,item))} title="Etes-vous sûr que vous voulez changer？" icon={<QuestionCircleOutlined style={{ color: 'red' }}  />}>
                        <Button type={"default"}  danger={!item.delivered} >{item.delivered ? 'livré':'non livré'}</Button>
                </Popconfirm>
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
                            <th>livré</th>

                        </tr>
                    </thead>
                    <tbody>{tableItemsView}</tbody>
                </table>
            </div>
        );
    }
};

export default connect(state => state.orders)(TableOrdersItems);
