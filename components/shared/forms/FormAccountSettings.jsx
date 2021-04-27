import React from 'react';
import { useForm } from 'react-hook-form';

const FormAccountSettings = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form
            className="ps-form--account-settings"
            onSubmit={handleSubmit(onSubmit)}
            // action="index.html"
            // method="get"
        >
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Nom<sup>*</sup></label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
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
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Nom d'Utilisateur<sup>*</sup></label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            name="username"
                            {...register("username",{required: "Nom d'utilisateur est un champ obligatoire",})}
                            />
                       {errors.username && <span role="alert">{errors.username.message}</span>}
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Email<sup>*</sup></label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            name="email"
                            {...register("email",
                            {required: "Email est un champ obligatoire",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email address invalide"
                                     }
                            }
                            )}
                            
                        />
                        {errors.email && <span role="alert">{errors.email.message}</span>}
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Rôle<sup>*</sup></label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            name="role"
                            {...register("role",{required: "Role est un champ obligatoire",})}
                            />
                        {errors.role && <span role="alert">{errors.role.message}</span>}
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Adresse<sup>*</sup></label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                            name="address"
                            {...register("address",{required: "Address est un champ obligatoire",})}
                            />
                        {errors.address && <span role="alert">{errors.address.message}</span>}
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Biographie<sup>*</sup></label>
                        <textarea
                            className="form-control"
                            rows="6"
                            placeholder="Veuillez entrer votre biographie"
                            {...register("biography",{required: "Biography est un champ obligatoire",})}>
                        </textarea>
                            {errors.biography && <span role="alert">{errors.biography.message}</span>}
                    </div>
                </div>
            </div>
            <div className="ps-form__submit text-center">
                <button className="ps-btn ps-btn--gray mr-3">Annuler</button>
                <button className="ps-btn success" type="submit">Mettre à Jour</button>
            </div>
        </form>
    );
};

export default FormAccountSettings;
