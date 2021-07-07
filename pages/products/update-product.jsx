import React, { useEffect, useState, useRef } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { useForm } from 'react-hook-form';
import {updateProduct} from "~/repositories/Repository";
import {Select, Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import PicturesWall from './uploadImage'
import {useRouter} from "next/router";
import {getUpdateSingleProduct, updateSingleProduct} from "~/store/products/action";
import {generate} from "shortid";
import {produce} from "immer";
const UpdateProductPage = () =>{
    const router =useRouter() ;

    const [property,setProperty] = useState([
        { id:"", key:"", value:""}
    ]);
    const [description_list,setDescription] = useState([
        { id:"",  value:""}
    ]);

const dispatch = useDispatch();
const uProd=useSelector(state=>state.products);
const updateLoading = uProd.updateLoading
    const updateProd = uProd.updateSingleProduct
    const [id,setid] =useState()

    const [productName,setProductName] =useState()
    const [productRef,setProductRef] =useState()
    const [productDescription,setProductDescription] =useState()
    const [productNumber,setProductNumber] =useState()
    const [productPrice,setProductPrice] =useState()
    const [productSalePrice,setProductSalePrice] =useState()
    const [productQuantity,setProductQuantity] =useState()
    const [productCategories,setProductCategories] =useState()
    const [productSubCategories,setProductSubCategories] =useState()
    const [productBrand,setProductBrand] =useState()




    const antIcon = <LoadingOutlined style={{ fontSize: 100 , color :'red' ,  position: 'absolute', left: '50%', top: '50%',
    }} spin />;

    useEffect(() => {

        dispatch(toggleDrawerMenu(false));
        if(updateLoading || updateProd===undefined || updateProd===null){router.push('/products')}
        else{
            const desc_list =updateProd.description_list.map(desc=>{return {id:generate(),value :desc.desc_item}})
            const spec = updateProd.specifications.map(desc=>{return {id:generate(),prop :desc.spec_name,value:desc.spec_value}})


            setid(updateProd.id)
            setProductName(updateProd.title)
            setProductRef(updateProd.sku)
            setProductDescription(updateProd.description)
            setProperty(spec)
            setDescription(desc_list)
            setProductNumber(updateProd.productNumber)
            setProductPrice(updateProd.price)
            setProductSalePrice(updateProd.sale_price)
            setProductQuantity(updateProd.inventory)

        }

    }, []);





    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = () =>{

        const spec =  property.map(p=>{

            return {spec_name: p.prop, spec_value : p.value}
        })
        const desc =  description_list.map(prop=>{

            return { desc_item : prop.value}
        })


        const data={
            "title" :productName ,

            "price" :productPrice,
            "sale_price" : productSalePrice ,

            "productNumber" : productNumber ,
            "description" : productDescription ,
            "sku" : productRef ,
            "inventory" :productQuantity,
            "specifications" : spec ,
            "description_list" : desc,
            "description_title" : productName
        }

        const formData =new FormData()
        formData.append('data', JSON.stringify(data));
        console.log(formData)

        dispatch(updateSingleProduct(updateProd.id,formData,'/products'))
    router.push('/products')

    }








    return (
        <ContainerDefault title="Create new product">
            <HeaderDashboard
                title="Create Product"
                description="RED SYS Create New Product "
            />
            <section className="ps-new-item">
                <form
                    className="ps-form ps-form--new-product"
                    action=""
                    method="get"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>General</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                Nom du produit<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter product name..."
                                                value={productName}

                                                onInput={(event)=>{setProductName(event.target.value);}}
                                                name="name"
                                                {...register("name",{
                                                    required: "Nom est un champ obligatoire",
                                                })}
                                            />
                                            {errors.name && <span role="alert">{errors.name.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Reférence<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter product Reference..."
                                                value={productRef}
                                                onInput={(event)=>{setProductRef(event.target.value)}}
                                                name="ref"
                                                {...register("ref",{
                                                    required: "Reférence est un champ obligatoire",
                                                })}
                                            />
                                            {errors.ref && <span role="alert">{errors.ref.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Informations sur le produit<sup>*</sup>
                                            </label>
                                            <text-area
                                                className="form-control"
                                                rows="6"
                                                placeholder="Enter product description..."
                                            >
                                            </text-area>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Prix ​​habituel<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Prix habituel en DT"
                                                name="prixH"
                                                value={productPrice}
                                                onInput={(event)=>{setProductPrice(event.target.value)}}
                                                {...register("prixH",{
                                                    required: "Prix habituel est un champ obligatoire",
                                                    pattern: {
                                                        value: /^[0-9 .]+$/,
                                                        message: "Prix habituel contient que des chiffres"
                                                    }
                                                })}
                                            />
                                            {errors.prixH && <span role="alert">{errors.prixH.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Prix ​​de vente<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Prix de vente en DT"
                                                name="prixV"
                                                value={productSalePrice}
                                                onInput={(event)=>{setProductSalePrice(event.target.value)}}
                                                {...register("prixV",{
                                                    required: "Prix de vente est un champ obligatoire",
                                                    pattern: {
                                                        value: /^[0-9 .]+$/,
                                                        message: "Prix de vente contient que des chiffres"
                                                    }})}
                                            />
                                            {errors.prixV && <span role="alert">{errors.prixV.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Quantité de vente<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                                name="quantity"
                                                value={productQuantity}
                                                onInput={(event)=>{setProductQuantity(event.target.value)}}
                                                {...register("quantity",{
                                                    required: "Quantité de vente est un champ obligatoire",
                                                    pattern: {
                                                        value: /^[0-9 .]+$/,
                                                        message: "Quantité contient que des chiffres"
                                                    }
                                                })}
                                            />
                                            {errors.quantity && <span role="alert">{errors.quantity.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label>
                                                Description du produit<sup>*</sup>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                // name="editordata"
                                                name="description"
                                                value={productDescription}
                                                onInput={(event)=>{setProductDescription(event.target.value)}}
                                                {...register("description",{
                                                    required: "Description est un champ obligatoire",
                                                })}></textarea>
                                            {errors.description && <span role="alert">{errors.description.message}</span>}
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>Inventaire</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>
                                                n° du produit <sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="entrer le n° du produit"
                                                name="N° du produit"
                                                value={productNumber}
                                                onInput={(event)=>{setProductNumber(event.target.value)}}

                                                {...register("N° du produit",{
                                                    required: "n° du produit est un champ obligatoire",
                                                })}
                                            />
                                            {errors.sku && <span role="alert">{errors.sku.message}</span>}
                                        </div>
                                    </div>
                                </figure>
                                <figure className="ps-block--form-box">
                                    <figcaption>Spécification</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group form-group--select">
                                            <label>Spécification & Valeurs<sup>*</sup></label>
                                            <button
                                                className="ps-btn"
                                                style={{marginBottom:"8px"}}
                                                onClick= {(event)=>{
                                                    event.preventDefault()
                                                    setProperty(currentProperty => [
                                                        ...currentProperty,
                                                        {
                                                            id: generate(),
                                                            prop:"",
                                                            value:""
                                                        }
                                                    ]);
                                                }}
                                            >
                                                Ajouter une propriété
                                            </button>
                                            <div className="form-group__content" >



                                                {property.map((p, index)=>{
                                                        return(
                                                            <div className="row" key={p.id}>
                                                                <input
                                                                    className="form-control col-sm-4"
                                                                    style={{width:"50%"}}
                                                                    onChange={e => {
                                                                        const prop = e.target.value;
                                                                        setProperty(currentProperty =>
                                                                            produce(currentProperty, v => {
                                                                                v[index].prop = prop;
                                                                            }))
                                                                    }}
                                                                    value = {p.prop}
                                                                    placeholder="Entrer une propriété"
                                                                />
                                                                <input
                                                                    className="form-control col-sm-4"
                                                                    style={{width:"50%"}}
                                                                    onChange={e => {
                                                                        const value = e.target.value;
                                                                        setProperty(currentProperty =>
                                                                            produce(currentProperty, v => {
                                                                                v[index].value = value;
                                                                            }))
                                                                    }}
                                                                    value = {p.value}
                                                                    placeholder="Entrer une valeur"
                                                                />
                                                                <button
                                                                    className="ps-btn ps-btn--gray col-sm-4"
                                                                    onClick={()=> {
                                                                        setProperty(currentProperty => currentProperty.filter(x => x.id !== p.id))
                                                                    }}
                                                                >
                                                                    Supprimer
                                                                </button>
                                                            </div>

                                                        )
                                                    }

                                                )}



                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <figure className="ps-block--form-box">
                                    <figcaption>desccription list </figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group form-group--select">
                                            <label>Valeurs  <sup>*</sup></label>
                                            <button
                                                className="ps-btn"
                                                style={{marginBottom:"8px"}}
                                                onClick= {(event)=>{
                                                    event.preventDefault()
                                                    setDescription(currentProperty => [
                                                        ...currentProperty,
                                                        {
                                                            id: generate(),

                                                            value:""
                                                        }
                                                    ]);
                                                }}
                                            >
                                                Ajouter une description
                                            </button>
                                            <div className="form-group__content" >



                                                {description_list.map((p, index)=>{
                                                        return(
                                                            <div className="row" key={p.id}>

                                                                <input
                                                                    className="form-control col-sm-4"
                                                                    style={{width:"50%"}}
                                                                    onChange={e => {
                                                                        const value = e.target.value;
                                                                        setDescription(currentProperty =>
                                                                            produce(currentProperty, v => {
                                                                                v[index].value = value;
                                                                            }))
                                                                    }}
                                                                    value = {p.value}
                                                                    placeholder="Entrer une valeur"
                                                                />
                                                                <button
                                                                    className="ps-btn ps-btn--gray col-sm-4"
                                                                    onClick={()=> {
                                                                        setDescription(currentProperty => currentProperty.filter(x => x.id !== p.id))
                                                                    }}
                                                                >
                                                                    Supprimer
                                                                </button>
                                                            </div>

                                                        )
                                                    }

                                                )}



                                            </div>
                                        </div>
                                    </div>
                                </figure>

                            </div>
                        </div>
                    </div>

                    <div className="ps-form__bottom">
                        <Link href={'/products'}>
                            <a
                                className="ps-btn ps-btn--black"
                            >
                                Retour
                            </a>
                        </Link>

                        <button className="ps-btn" type="submit" onClick={()=>{
                            handleSubmit(onSubmit)
                        }}  >Soumettre</button>
                    </div>



                </form>
            </section>
        </ContainerDefault>
    );
};
export default UpdateProductPage;
