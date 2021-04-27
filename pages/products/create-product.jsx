import React, { useEffect, useState, useRef } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import Link from "next/link";
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { useForm } from 'react-hook-form';

const MARQUE=['marque1', 'marque2', 'marque3', 'marque4'];
const CATEGORY=['category1', 'category2', 'category3', 'category4'];

const CreateProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);


    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) =>{
         console.log(data);
    
      }

    const uploadMultipleFiles = (e) => {
        if (Array.from(e.target.files).length > 3) {
          e.preventDefault();
          alert(`Cannot upload files more than ${3}`);
          return;
        }
      }  

    
    const hiddenFileInput = useRef(null);
  
  
    // const handleClick = event => {
    //   hiddenFileInput.current.click();
    // };  


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
                                            Articles vendus<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                                name="article"
                                                {...register("article",{
                                                required: "Articles vendus est un champ obligatoire",
                                                })}
                                            />
                                            {errors.article && <span role="alert">{errors.article.message}</span>}
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
                                        {/* <div className="form-group">
                                            <label>Produit Thumbnail</label>
                                            <div className="form-group--nest">
                                                <input
                                                    className="form-control mb-1"
                                                    type="text"
                                                    placeholder=""
                                                />
                                                <button className="ps-btn ps-btn--sm">
                                                    Choisir
                                                </button>
                                            </div>
                                        </div> */}
                                        <div className="form-group">
                                            <label>Galerie de produits</label>
                                            <div className="form-group--nest" >
                                                 <input
                                                    // className="form-control mb-1"
                                                    type="file"
                                                    name="image"
                                                    placeholder="Choose photos"
                                                    {...register('image', { required: "Vous devez choisir des images"})}
                                                    multiple
                                                    // style={{display:"none"}}
                                                    accept=".jpeg, .png"
                                                    ref={hiddenFileInput}
                                                    onChange={uploadMultipleFiles}
                                                /> 
                                                {/* <button  className="ps-btn ps-btn--sm" onClick={handleClick}>
                                                    Choisir
                                                </button> */}
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
                                                SKU<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                                name="sku"
                                                {...register("sku",{
                                                    required: "SKU est un champ obligatoire",
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
                                                    {...register("marque",{
                                                        required: "Catégorie est un champ obligatoire"
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
                                                    title="Brand"
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

                        <button className="ps-btn ps-btn--gray">Annuler</button>
                        <button className="ps-btn" type="submit">Soumettre</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
