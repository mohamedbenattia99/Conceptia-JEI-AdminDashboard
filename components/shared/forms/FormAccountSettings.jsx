import React from 'react';

const FormAccountSettings = () => {
    return (
        <form
            className="ps-form--account-settings"
            action="index.html"
            method="get">
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Nom</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Nom d'Utilisateur</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Rôle</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Adresse</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="form-group">
                        <label>Biographie</label>
                        <textarea
                            className="form-control"
                            rows="6"
                            placeholder=""></textarea>
                    </div>
                </div>
            </div>
            <div className="ps-form__submit text-center">
                <button className="ps-btn ps-btn--gray mr-3">Annuler</button>
                <button className="ps-btn success">Mettre à Jour</button>
            </div>
        </form>
    );
};

export default FormAccountSettings;
