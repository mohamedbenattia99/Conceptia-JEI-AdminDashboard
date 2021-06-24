import React, { useEffect, useState, useRef } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import Link from "next/link";
import { generate } from 'shortid';
import { produce } from "immer";
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { useForm } from 'react-hook-form';
import { Space, Button } from 'antd';
import { fetchData, serializeQuery } from "~/repositories/Repository";
const CRITERIA = ['catégorie', 'produit'];

import { Select } from "antd";
import PicturesWall from './uploadImage';
import ImageDemo from './Images';
import { useRouter } from 'next/router';
const CreatePromotionPage = () => {
    const router = useRouter();

    const [property, setProperty] = useState([
        { id: "", key: "", value: "" }
    ]);
    // const [productName, setProductName] = useState()
    // const [productRef, setProductRef] = useState()
    // const [productDescription, setProductDescription] = useState()
    // const [productNumber, setProductNumber] = useState()
    // const [productPrice, setProductPrice] = useState()
    // const [productSalePrice, setProductSalePrice] = useState()
    // const [productQuantity, setProductQuantity] = useState()
    // const [criteria, setCriteria] = useState();
    const [searchParam, setSearchParam] = useState();
    // const [productBrand, setProductBrand] = useState()
    // const [productImages, setProductImages] = useState()

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    const handleChange = (fileList) => {
        setProductImages({ fileList })
        console.log(productImages)
    }


    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = () => {

        const data = {
            //  title :productName ,
            //product_categories:productCategories,
            // images: productImages,
            //  price :productPrice,
            //  sale_price : productSalePrice ,
            // brands : productBrand ,
            //  productNumber : productNumber ,
            //  description : productDescription ,
            //  sku : productRef ,
            //  inventory :productQuantity,


        }
        fetchData(data, 'promotions');

        router.push("/promotions");

    }

    const handleSelectParameter = (value) => {
        setSearchParam({ searchParam: value });
        console.log(value);
    }

    const handleSearch = (e) => {
        if (e.target.value !== '') {
            // const keyword = e.target.value;
            // this.setState({
            //     keyword: e.target.value
            // });

            if (searchParam == "product") {
                console.log('searchparam = product')
            } else if (searchParam == "category") {
                console.log('searchparam = category')
            }
        }
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

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>Images des promotions</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
                                            <label>Galerie de produits</label>
                                            <div className="form-group--nest " >
                                                <Space size={[16, 16]} wrap>
                                                    <ImageDemo/>
                                                    <ImageDemo/>
                                                    <ImageDemo/>
                                                    <ImageDemo/>
                                                    <ImageDemo/>
                                                    <ImageDemo/>
                                                    <ImageDemo/>
                                                    <ImageDemo/>
                                                </Space>
                                            </div>
                                            {/* {errors.image && <span role="alert">{errors.image.message}</span>} */}
                                        </div>
                                    </div>
                                </figure>

                                <figure className="ps-block--form-box">
                                    <figcaption>Critére de promotion</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group form-group--select">
                                            <label>Critére de promotion<sup>*</sup></label>
                                            <div className="form-group__content">
                                                {/* TODO CRITERE DE RECHERCHE */}
                                                <Select
                                                    onSelect={(value)=>{handleSelectParameter(value)}}
                                                    placeholder="critére de promotion"
                                                    className="ps-ant-dropdown"
                                                    listItemHeight={20}>
                                                    <option value="product">
                                                        Produit
                                                    </option>
                                                    <option value="category">
                                                        Catégorie
                                                    </option>
                                                </Select>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="ps-block__content">
                                        <div className="form-group form-group--select">
                                            <label>Lien<sup>*</sup></label>
                                            {/* TO DO SEARCH BAR */}
                                            <div className="ps-section__search">
                                                <form
                                                    className="ps-form--search-simple"
                                                    onSubmit={(event) => { event.preventDefault() }}
                                                >
                                                    <input
                                                        disabled={searchParam === ''}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="recherche produit/catégorie ..."
                                                        onChange={handleSearch}
                                                    />
                                                    <button>
                                                        <i className="icon icon-magnifier"></i>
                                                    </button>
                                                </form>
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
                        <button className="ps-btn" type="submit" onClick={() => {
                            handleSubmit(onSubmit)

                        }}>Soumettre</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreatePromotionPage);
