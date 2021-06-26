import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {fetchData,serializeQuery} from "~/repositories/Repository";

const FormCreateCategory = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const [categoryName,setCategoryName]=useState()
    const [categorySlug,setCategorySlug]=useState()


    const onSubmit = () => {
        console.log("hi");
        const data={
            name:categoryName,
 }
        fetchData(serializeQuery(data),'product-categories')
    };

    return (
        <form 
        className="ps-form ps-form--new" 
        onSubmit={handleSubmit(onSubmit)}
        action="index.html" 
        // method="get" 
        >
            <div className="ps-form__content">
                <div className="form-group">
                    <label>
                        Nom<sup>*</sup>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Entrer le nom de la catégorie"

                        name="name"
                        value={categoryName}
                        onInput={(event)=>{setCategoryName(event.target.value)}}
                        {...register("name",{
                            required: "Nom est un champ obligatoire",
                            pattern: {
                                value: /^[a-zA-Z ]+$/,
                                message: "Nom contient que des lettres"
                                     }
                        })}
                    />
                    {errors.name && <span role="alert">{errors.name.message}</span>}
                </div>



            </div>
            <div className="ps-form__bottom">
                <button className="ps-btn ps-btn--sumbit success" type="submit">
                    Add new
                </button>
            </div>
        </form>
    );
};

export default FormCreateCategory;
