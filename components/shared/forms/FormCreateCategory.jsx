import React from 'react';
import { useForm } from 'react-hook-form';

const FormCreateCategory = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);

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
                <div className="form-group">
                    <label>
                        Slug<sup>*</sup>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Entrer le slug de la catégorie"
                        name="slug"
                        {...register('slug', { required: "Slug est un champ obligatoire"})}   
                    />
                    {errors.slug && <span role="alert">{errors.slug.message}</span>}
                </div>
                <div className="form-group form-group--select">
                    <label>
                        Parent
                        {/* <sup>*</sup> */}
                    </label>
                    <div className="form-group__content">
                        <select 
                        className="ps-select" 
                        title="Parent" 
                        name="parent"
                        // {...register('parent', { required: "required"})}
                        >
                            <option selected disabled hidden>Veuillez choisir un parent</option>
                            <option value="1">Parent 1</option>
                            <option value="2">Parent 2</option>
                            <option value="3">Parent 3</option>
                            <option value="4">Parent 4</option>
                        </select>
                    </div>
                    {/* {errors.parent?.message && errors.name.type === "required" && (<span role="alert">Vous devez choisir un parent</span>)} */}
                </div>
                <div className="form-group">
                    <label>Description<sup>*</sup></label>
                    {/* <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Entrez la description de la catégorie"
                        name="description"
                        {...register('description', { required: "Description est un champ obligatoire"})}
                    >
                    </textarea> */}
                    <br></br>
                        <input
                            // className="form-control"
                            type="file"
                            placeholder=""
                            accept=".jpeg, .png"
                            {...register('description', { required: "Description est un champ obligatoire"})}
                        />
                </div>
                {errors.description && <span role="alert">{errors.description.message}</span>}
            </div>
            <div className="ps-form__bottom">
                <button className="ps-btn ps-btn--gray">Reset</button>
                <button className="ps-btn ps-btn--sumbit success" type="submit">
                    Add new
                </button>
            </div>
        </form>
    );
};

export default FormCreateCategory;
