import React from 'react';
import {getProductByProductNumber, getProductsByKeyword} from "~/store/products/action";

const FormSearchSimple = () => {
    return (
        <form
            className="ps-form--search-simple"
            action="index.html"
            method="get">
            <input
                className="form-control"
                type="text"
                placeholder="Search..."
            />
            <button>
                <i className="icon icon-magnifier"></i>
            </button>
        </form>
    );
};

export default FormSearchSimple;
