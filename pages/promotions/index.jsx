import React, { useEffect, useState, useRef } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import Link from "next/link";
import { generate } from 'shortid';
import { produce } from "immer";
import { connect, useDispatch , useSelector } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import { useForm } from 'react-hook-form';
import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { updatePromotions, baseUrl } from "~/repositories/Repository";


import { Select } from "antd";

import { useRouter } from 'next/router';
import {getProductBrands, getProductCategories} from "~/store/products/action";
import {getBanners, getPromotions} from "~/store/promotions/action";
const CreatePromotionPage = () => {
const router = useRouter();
const CRITERIA = ['catégorie', 'produit'];

const [searchParam, setSearchParam] = useState();
const [images, setImages] = useState();
const [keyword,setKeyword]=useState();
const [prodBanners,setBanners]=useState();
const [prodPromotions,setPromotions]=useState();


const promotions = useSelector(state=>state.promotions.promotions );
const banners = useSelector(state=>state.promotions.banners );
console.log(banners)
const promotionsLoading = useSelector(state=>state.promotions.promotionsLoading )
const bannersLoading = useSelector(state=>state.promotions.bannersLoading )

const dispatch = useDispatch()
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);

    useEffect(() => {
        dispatch(getPromotions())
        dispatch(getBanners())
    }, [dispatch]);




    const handleImageChange = (fileList ) => {
    setImages({fileList})
console.log(fileList)

    }

const handleBannersChange = (value ) => {
    const name = (banners && !bannersLoading && Array.isArray(banners)) ? banners.filter(b=>b.id===value) : undefined
setBanners({id:value,name:name[0].name})
    }

const handlePromotionsChange = (value ) => {
setPromotions(value)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = () => {
        let formData= new FormData()
        console.log(images.fileList.file.originFileObj)
        const image = images.fileList.file.originFileObj
        formData.append("files.image",image)


        let data ;
        console.log('search param = ',searchParam)
        let query = searchParam === "category" ? `/search?category=${keyword}`: searchParam === "category" ?`/product/${keyword}` :'/'
        if(prodBanners.id){
            console.log(prodBanners)
            data ={"name":prodBanners.name , "url": query}
            console.log(data)
            formData.append('data', JSON.stringify(data));
            updatePromotions(formData, 'banners',prodBanners.id);
        }


        else if (prodPromotions) {
            data ={"id": prodPromotions, "link": query}
            formData.append('data', JSON.stringify(data));
            updatePromotions(formData, 'promotions',prodPromotions);
        }


      //  router.push("/promotions");

    }

    const handleSelectParameter = (value) => {
        setSearchParam(value);
        console.log(value);
    }

    const handleSearch = (e) => {
        if (e.target.value !== '') {
            const keyword = e.target.value;
            setKeyword(prev=>keyword)
        }
    }



    return (
        <ContainerDefault title="Create new product">
            <HeaderDashboard
                title="Create Product"
                description="CONCEPTIA Create New Product "
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
                                    <figcaption>Banners & Promotions</figcaption>
                                    <div className="ps-block__content" >
                                        <div className="form-group" style={{display : prodPromotions ? 'none' : 'block'}}>
                                            <label>Banners</label>
                                            <div className="form-group form-group--select">
                                                <label>Banners  a changer <sup>*</sup></label>
                                                <div className="form-group__content">
                                                    {banners && !bannersLoading && Array.isArray(banners) ? <Select
                                                        onSelect={(value)=>handleBannersChange(value)}
                                                        className="ps-select"

                                                    >
                                                        {/*<option value="" disabled>Veuillez choisir une image</option>*/}
                                                        {banners.map(item => <option  key={item.id} value={item.id}>{item.slug}</option>)}
                                                    </Select> : <select></select>}
                                                    <br></br>
                                                </div>
                                            </div>

                                            <Upload
                                                listType="picture"
                                                maxCount={1}
                                                onChange={handleImageChange}
                                            >
                                                <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                                            </Upload>

                                        </div>

                                        <div className="form-group" style={{display : prodBanners ? 'none' : 'block'}}>
                                            <label>Promotions</label>
                                            <div className="form-group form-group--select">
                                                <label>promotions a changer <sup>*</sup></label>
                                                <div className="form-group__content">
                                                    {promotions && !promotionsLoading && Array.isArray(promotions) ? <Select
                                                        onSelect={(value)=>handlePromotionsChange(value)}
                                                        className="ps-select"

                                                    >
                                                        {/*<option value="" disabled>Veuillez choisir une image</option>*/}
                                                        {promotions.map(item => <option  key={item.id} value={item.id}>{item.slug}</option>)}
                                                    </Select> : <select></select>}
                                                    <br></br>
                                                </div>
                                            </div>

                                            <Upload
                                                listType="picture"
                                                maxCount={1}
                                                onChange={handleImageChange}
                                            >
                                                <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                                            </Upload>

                                        </div>
                                        </div>
                                </figure>

                                <figure className="ps-block--form-box">
                                    <figcaption>Critére de promotion</figcaption>
                                    <div className="ps-block__content">
                            <div className="form-group form-group--select">
                                            <label>Critére de promotion<sup>*</sup></label>
                                            <div className="form-group__content">
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
                                            <label>product/categorie Id <sup>*</sup></label>
                                            <div className="ps-section__search">
                                                <form
                                                    className="ps-form--search-simple"
                                                    onSubmit={(event) => { event.preventDefault() }}
                                                >
                                                    <input
                                                        disabled={searchParam === ''}
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="donner id du produit ou slug du catégorie ..."
                                                        onChange={handleSearch}
                                                    />

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
                        <button className="ps-btn" type="submit" disabled={!images || (!prodBanners && !prodPromotions)} style={!images || (!prodBanners && !prodPromotions) ? {cursor : "not-allowed"}:{}} onClick={() => {
                            handleSubmit(onSubmit)

                        }}>Soumettre</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default CreatePromotionPage;
