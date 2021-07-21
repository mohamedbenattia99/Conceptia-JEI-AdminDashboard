import React, { Component, useEffect } from 'react';
import { Popconfirm,Button} from 'antd';
import { connect} from 'react-redux';
import { validateOrder} from "~/store/orders/action";
import { QuestionCircleOutlined} from '@ant-design/icons'
import { withRouter} from "next/router";

class TableOrdersItems extends Component {


    constructor(props) {
        super(props);
        this.state ={
            valid : [] ,
            visibility:true ,
            delivered : false ,
            router : this.props.router


         }

    }


    componentDidMount() {
       if(this.props.allOrders && !this.props.ordersLoading  && Array.isArray(this.props.allOrders)) this.setState({valid : this.props.allOrders.map(order=>order.valid),delivered : this.props.allOrders.map(order=>order.delivered)})

    }


    render() {

        const handleValidate = (e,item,condition)=> {
            this.props.dispatch(validateOrder(item.id, {fullfillment: condition, valid: !item.valid}))
            this.state.router.push("/")
        }

        const handleDeliver = (e,item)=> {
            this.props.dispatch(validateOrder(item.id, {delivered : !item.delivered ,fullfillment :item.delivered? 'Cancel':'livré'} ))
            this.state.router.push("/")

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
                            {console.log("item",item)}
                        {item.products ? item.products.map(prod =><><li >{prod.title}</li><br></br></>):'no products'}
                        </ol>
                    </td>
                    <td>
                        <ol type={"I"}>
                            {item.products ? item.products.map(prod =><><li >{prod.id}</li><br></br></>):'no products'}
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
                            <th>N° d'article</th>
                            <th>Nom client </th>
                            <th>Numéro téléphone</th>
                            <th>Email client </th>
                            <th>Accomplissement</th>
                            <th>Total</th>
                            <th>Valider</th>
                            <th>Livré</th>

                        </tr>
                    </thead>
                    <tbody>{tableItemsView}</tbody>
                </table>
            </div>
        );
    }
};

export default withRouter( connect(state => state.orders)(TableOrdersItems));
