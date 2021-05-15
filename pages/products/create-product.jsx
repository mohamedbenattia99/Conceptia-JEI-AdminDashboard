import React, { useEffect, useState, useRef } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import Link from "next/link";
import { generate } from 'shortid';
import { produce } from "immer";
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { useForm } from 'react-hook-form';
import {fetchData,serializeQuery} from "~/repositories/Repository";
const MARQUE=['marque1', 'marque2', 'marque3', 'marque4'];
const CATEGORY=['category1', 'category2', 'category3', 'category4'];
import {notification} from "antd";
import PicturesWall from './uploadImage'
import { useRouter } from 'next/router';
const CreateProductPage = () => {
    const router =useRouter() ;

    const [property,setProperty] = useState([
        { id:"", key:"", value:""}
    ]);
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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const handleChange = (fileList ) => {
        setProductImages({fileList})
        console.log(productImages)
    }


    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = () =>{

         const data={
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
         fetchData(data,'products');

        router.push("/products")
    
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
                                <figure className="ps-block--form-box">
                                    <figcaption>Spécification</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group form-group--select">
                                            <label>Spécification & Valeurs<sup>*</sup></label>
                                            <button
                                                className="ps-btn"
                                                style={{marginBottom:"8px"}}
                                                onClick= {()=>{
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

                        }}>Soumettre</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
