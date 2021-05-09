import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import {updateSingleProduct } from '~/store/products/action';
import {deleteProduct} from '../../../repositories/Repository'
import { useRouter } from 'next/router'


const TableProjectItems =({values})=>{
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
                {
                    values.includes("id") ? <td>{item.id}</td> : null
                }
                {
                    values.includes("name") ? <td> <a href={"#"} > <strong>{item.title}  </strong> </a> </td> : null
                }
                {
                    values.includes("ref") ? <td>{item.sku}</td> : null
                }
                {
                    values.includes("numArt") ? <td>{item.productNumber}</td> : null
                }
                {
                    values.includes("stock") ? <td>{badgeView}</td> : null
                }
                {
                    values.includes("price") ? <td><strong>{item.price}</strong></td> : null
                }
                {
                    values.includes("salePrice") ? <td><strong>{item.sale_price}</strong></td> : null
                }
                {
                    values.includes("category") ?
                        <td>
                        <p className="ps-item-categories">
                            {/*{item.categories.map((cat) => (*/}
                            {/*    <a href="#" key={cat.name}>*/}
                            {/*        {cat.name}*/}
                            {/*    </a>*/}
                            {/*))}*/}
                            fill this with categories after the client send database
                        </p>
                    </td> : null
                }{
                    values.includes("edit") ? <td>
                        <DropdownAction  handleDelete={()=> {
                            handleDelete(item.id)
                        }}
                                         handleUpdate={()=> {
                                             handleUpdate(item)
                                         }}
                        />
                    </td> : null
                }


            </tr>
        )

    }) :null

    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                <tr>
                    {
                        values.includes("id") ? <th>ID</th> : null
                    }
                    {
                        values.includes("name") ? <th>Nom</th> : null
                    }
                    {
                        values.includes("ref") ? <th>Référence</th> : null
                    }
                    {
                        values.includes("numArt") ? <th>N° Article</th> : null
                    }
                    {
                        values.includes("stock") ? <th>Stock</th> : null
                    }
                    {
                        values.includes("price") ? <th>Prix</th> : null
                    }
                    {
                        values.includes("salePrice") ? <th>Prix de vente</th> : null
                    }
                    {
                        values.includes("category") ? <th>category</th> : null
                    }
                    {
                        values.includes("edit") ? <th>edit</th> : null
                    }
                </tr>

                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );

};

export default TableProjectItems;
