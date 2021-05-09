import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import {updateSingleProduct } from '~/store/products/action';
import {deleteProduct} from '../../../repositories/Repository'
import { useRouter } from 'next/router'


const TableProjectItems =()=>{
    const router =useRouter() ;

    const dispatch =useDispatch();

   const  handleDelete =( id)=> {
    deleteProduct(id) ;
}
   const  handleUpdate = (item)=>{
    dispatch(updateSingleProduct(item))
    router.push('/products/update-product')

    }




    const allProducts =useSelector(state=>state.products.allProducts) ;
    const productsLoading =useSelector(state=>state.products.productsLoading) ;


      console.log( allProducts)

    const tableItems = !(productsLoading) && Array.isArray(allProducts) ? allProducts.map((item, index) => {

            let badgeView;
            if (item.inventory!=0) {
                badgeView = <span className="ps-badge success">Stock</span>;
            } else {
                badgeView = <span className="ps-badge gray">Out of stock</span>;
            }
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        <a href="#">
                            <strong>{item.title}</strong>
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
                            {/*{item.categories.map((cat) => (*/}
                            {/*    <a href="#" key={cat.name}>*/}
                            {/*        {cat.name}*/}
                            {/*    </a>*/}
                            {/*))}*/}
                            fill this with categories after the client send database
                        </p>
                    </td>
                    <td>{item.brand}</td>
                    <td>
                        <DropdownAction  handleDelete={()=> {
                            handleDelete(item.id)
                        }}
                                         handleUpdate={()=> {
                                             handleUpdate(item)
                                         }}
                        />
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

};

export default TableProjectItems;
