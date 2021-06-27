import React, { useEffect, useState, useRef } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { useForm } from 'react-hook-form';
import {updateProduct} from "~/repositories/Repository";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import PicturesWall from './uploadImage'
import {useRouter} from "next/router";
import {updateSingleProduct} from "~/store/products/action";
const UpdateProductPage = () =>{
    const router = useRouter() ;

    const MARQUE=['marque1', 'marque2', 'marque3', 'marque4'];
    const CATEGORY=['category1', 'category2', 'category3', 'category4'];

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
    const [productBrand,setProductBrand] =useState()
    const [productImages,setProductImages] =useState()




    const antIcon = <LoadingOutlined style={{ fontSize: 100 , color :'red' ,  position: 'absolute', left: '50%', top: '50%',
    }} spin />;

    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
        if(updateLoading || updateProd===undefined || updateProd===null);
        else{
            setid(updateProd.id)
            setProductName(updateProd.title)
            setProductRef(updateProd.sku)

            setProductNumber(updateProd.productNumber)
            setProductPrice(updateProd.price)
            setProductSalePrice(updateProd.sale_price)
            setProductQuantity(updateProd.inventory)
        }

    }, []);



    const handleChange = (fileList ) => {
        setProductImages({fileList})
    }


    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = () =>{

        const data={
            id : id ,
            title :productName ,
            //product_categories:productCategories,
            images :productImages,
            price :productPrice,
            sale_price : productSalePrice ,
            // brands : productBrand ,
            productNumber : productNumber ,
            //  description : productDescription ,
            sku : productRef ,
            inventory :productQuantity,

        }
        dispatch(updateSingleProduct(data.id,data))
    router.push('/products')

    }






    return (<div>
            {(updateLoading || updateProd===undefined || updateProd===null) ? <Spin indicator={antIcon} /> :
                <ContainerDefault title="Create new product">
                <HeaderDashboard
                    title=" mettre à jour le produit"
                    description="RED SYS mettre à jour le produit "
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
                                        <figcaption>Images du produit</figcaption>
                                        <div className="ps-block__content">

                                            <div className="form-group">
                                                <label>Galerie de produits</label>
                                                <div className="form-group--nest" >
                                                    <PicturesWall handleChange={handleChange} />

                                                </div>
                                                {errors.image && <span role="alert">{errors.image.message}</span>}
                                            </div>
                                        </div>
                                    </figure>
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
                                        <figcaption>Meta</figcaption>
                                        <div className="ps-block__content">
                                            <div className="form-group form-group--select">
                                                <label>Marque<sup>*</sup></label>
                                                <div className="form-group__content">
                                                    <select
                                                        className="ps-select"
                                                        title="Brand"
                                                        name="marque"
                                                        value={productDescription}
                                                        onSelect={(event)=>{setProductBrand(event.target.value)}}
                                                        {...register("marque",{
                                                            required: "Marque est un champ obligatoire"
                                                        })}
                                                    >
                                                        <option value="" disabled>Veuillez choisir une marque</option>
                                                        {MARQUE.map(c => <option key={c}>{c}</option>)}
                                                    </select>
                                                    <br></br>
                                                    {errors.marque && <span role="alert">{errors.marque.message}</span>}

                                                </div>
                                            </div>
                                            <div className="form-group form-group--select">
                                                <label>Nom de la catégorie associée au produit<sup>*</sup></label>
                                                <div className="form-group__content">
                                                    <select
                                                        className="ps-select"
                                                        title="Category"
                                                        value={productCategories}
                                                        onSelect={(event)=>{setProductCategories(event.target.value)}}
                                                        {...register("category",{
                                                            required: "Catégorie est un champ obligatoire"
                                                        })}
                                                    >
                                                        <option value="" disabled>Veuillez choisir une catégorie</option>
                                                        {CATEGORY.map(c => <option key={c} value={c}>{c}</option>)}
                                                    </select>
                                                    <br></br>
                                                    {errors.category && <span role="alert">{errors.category.message}</span>}
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

                            <button className="ps-btn" type="submit" disabled={updateLoading || updateProd===null || updateProd===undefined} onClick={()=>{handleSubmit(onSubmit)}}>mise à jour</button>
                        </div>
                    </form>
                </section>
            </ContainerDefault>}


        </div>

    );
};
export default UpdateProductPage;
