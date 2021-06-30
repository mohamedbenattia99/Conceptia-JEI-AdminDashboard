import React, { useEffect,useState} from 'react';
import CardRecentOrders from '~/components/shared/cards/CardRecentOrders';
import CardSaleReport from '~/components/shared/cards/CardSaleReport';
import CardEarning from '~/components/shared/cards/CardEarning';
import {getOrdersCountByDate}  from '../store/orders/action'
import ContainerDashboard from '~/components/layouts/ContainerDashboard';
import {useDispatch, useSelector} from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'


const Index = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        dispatch(getOrdersCountByDate()) ;
    }, [dispatch]) ;

    const checkLogin = async () =>{
        await setTimeout(()=>{
            if(props.isLoggedIn===false){
                router.push('/login');
            }
        },0)
    }

    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
        checkLogin();

    }, []);

    const function1 = (order)=>{
        let productNbr =0
         if ( Array.isArray(order.order_products)){ for(let  i=0;i<order.order_products.length;i++){if(order.order_products[i].quantity) {
             console.log("order.order_products[i].quantity ",order.order_products[i].quantity)
             productNbr += order.order_products[i].quantity
         }
         }
         }

         else productNbr =0
        let [year,month,day]= order.date.split('-')

        data[parseInt(day)]+=parseInt(productNbr)  ;
    }
    const recentOrders = useSelector(state=>state.orders.recentOrders)
    const recentOrdersLoading = useSelector(state=>state.orders.recentOrdersLoading)
    console.log('recent orders ',recentOrders)
    var date = new Date();
    var daysInMonth = new Date(date.getFullYear(), date. getMonth()+1, 0).getDate();
    let data = new Array(daysInMonth+1); for (let i=0; i<daysInMonth+1;i++) data[i] = 0;
    if(!recentOrdersLoading && recentOrders && Array.isArray(recentOrders) ) {

        recentOrders.forEach(order=>function1(order))
    }

    return (
        <ContainerDashboard title="Dashboard">
            <section className="ps-dashboard" id="homepage">
                <div className="ps-section__left">
                    <div className="row">
                        <div className="col-xl-8 col-12">
                            <CardSaleReport y_axis={data}  />
                        </div>
                        <div className="col-xl-4 col-12">
                            <CardEarning />
                        </div>
                    </div>
                    <CardRecentOrders />
                </div>
            </section>
        </ContainerDashboard>

    );
};
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Index);
