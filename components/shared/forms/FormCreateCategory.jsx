import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {createCategory} from "~/repositories/Repository";
import {generate} from "shortid";
import {produce} from "immer";

const FormCreateCategory = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const [categoryName,setCategoryName]=useState()
    const [categorySlug,setCategorySlug]=useState()
    const [property,setProperty] = useState([
        { id:"", key:"", value:""}
    ]);

    const onSubmit = () => {
        console.log(property)
       const megaContent = property.map(p=>{
            return {
                Heading:p.prop, url : p.value
            }})
        console.log("hi");
        const data={
            name:categoryName,
 }
        createCategory(megaContent,data)
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
                <figure className="ps-block--form-box">
                    <br></br>
                    <h4>Sous Gategorie</h4>
                    <br></br>
                    <div className="ps-block__content">
                        <div className="form-group form-group--select">
                            <button
                                className="ps-btn"
                                style={{marginBottom:"8px",marginRight:"5%",marginLeft:'5%',maxWidth:'90%',maxHeight:'40px',fontSize:'13px',align:'center',backgroundColor:'#96ED89'}}
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
                                Ajouter
                            </button>
                            <div className="form-group__content" >



                                {property.map((p, index)=>{
                                        return(
                                            <div className="row" key={p.id} style={{display:"flex",flexDirection:'column',alignItems :'center'}}>
                                                <h5 style={{margin:'10px' ,width:'100%', display:'inline-block' }}>heading</h5>

                                                <input
                                                    style={{width:"80%",height:"50px",margin:'10px' }}
                                                    onChange={e => {
                                                        const prop = e.target.value;
                                                        setProperty(currentProperty =>
                                                            produce(currentProperty, v => {
                                                                v[index].prop = prop;
                                                            }))
                                                    }}
                                                    value = {p.prop}
                                                    placeholder="Entrer un heading "
                                                />
                                                <h5 style={{margin:'10px' ,width:'100%', display:'inline-block' }} >url</h5>

                                                <input
                                                    style={{width:"80%",height:"50px",margin:'10px' }}
                                                    onChange={e => {
                                                        const value = e.target.value;
                                                        setProperty(currentProperty =>
                                                            produce(currentProperty, v => {
                                                                v[index].value = value;
                                                            }))
                                                    }}
                                                    value = {p.value}
                                                    placeholder="Entrer l'url"
                                                />
                                                <button
                                                    onClick={()=> {
                                                        setProperty(currentProperty => currentProperty.filter(x => x.id !== p.id))
                                                    }} style={{marginBottom:"8px",marginRight:"5%",marginLeft:'5%',maxWidth:'90%',maxHeight:'40px',fontSize:'13px',align :'center',margin:'10px',backgroundColor:'#EC2434' ,padding:"10px",color:'white',border:"none"}}
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
            <div className="ps-form__bottom">
                <button className="ps-btn ps-btn--sumbit success" type="submit">
                    Add new
                </button>
            </div>
        </form>
    );
};

export default FormCreateCategory;
