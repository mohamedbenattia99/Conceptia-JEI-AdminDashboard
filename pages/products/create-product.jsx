import React, { useEffect } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const CreateProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);
    return (
        <ContainerDefault title="Create new product">
            <HeaderDashboard
                title="Create Product"
                description="Martfury Create New Product "
            />
            <section className="ps-new-item">
                <form
                    className="ps-form ps-form--new-product"
                    action=""
                    method="get">
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
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Reférence<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter product Reference..."
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                            Informations sur le produit<sup>*</sup>
                                            </label>
                                            <text-area
                                                className="form-control"
                                                rows="6"
                                                placeholder="Enter product description..."></text-area>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                            Prix ​​habituel<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                            Prix ​​de vente<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                            Quantité de vente<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                            Articles vendus<sup>*</sup>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                            Description du produit<sup>*</sup>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                name="editordata"></textarea>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <figure className="ps-block--form-box">
                                    <figcaption>Images du produit</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group">
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
                                        </div>
                                        <div className="form-group">
                                            <label>Galerie de produitsy</label>
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
                                        </div>
                                        <div className="form-group form-group--nest">
                                            <input
                                                className="form-control mb-1"
                                                type="text"
                                                placeholder=""
                                            />
                                            <button className="ps-btn ps-btn--sm">
                                                Choisir
                                            </button>
                                        </div>
                                        <div className="form-group">
                                            <label>Video (optional)</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter video URL"
                                            />
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
                                            />
                                        </div>
                                        <div className="form-group form-group--select">
                                            <label>Status</label>
                                            <div className="form-group__content">
                                                <select
                                                    className="ps-select"
                                                    title="Status">
                                                    <option value="1">
                                                        Status 1
                                                    </option>
                                                    <option value="2">
                                                        Status 2
                                                    </option>
                                                    <option value="3">
                                                        Status 3
                                                    </option>
                                                    <option value="4">
                                                        Status 4
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                                <figure className="ps-block--form-box">
                                    <figcaption>Meta</figcaption>
                                    <div className="ps-block__content">
                                        <div className="form-group form-group--select">
                                            <label>Marque</label>
                                            <div className="form-group__content">
                                                <select
                                                    className="ps-select"
                                                    title="Brand">
                                                    <option value="1">
                                                    Marque 1
                                                    </option>
                                                    <option value="2">
                                                    Marque 2
                                                    </option>
                                                    <option value="3">
                                                    Marque 3
                                                    </option>
                                                    <option value="4">
                                                    Marque 4
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Tags</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="ps-form__bottom">
                        <a
                            className="ps-btn ps-btn--black"
                            href="products.html">
                            Retour
                        </a>
                        <button className="ps-btn ps-btn--gray">Annuler</button>
                        <button className="ps-btn">Soumettre</button>
                    </div>
                </form>
            </section>
        </ContainerDefault>
    );
};
export default connect((state) => state.app)(CreateProductPage);
