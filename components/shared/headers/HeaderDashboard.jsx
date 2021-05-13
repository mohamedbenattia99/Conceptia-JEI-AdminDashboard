import React from 'react';
import FormHeaderSearch from '~/components/shared/forms/FormHeaderSearch';
import {shopUrl} from "~/repositories/Repository";

const HeaderDashboard = ({
    title = 'Tableau de bord',
    description = 'Vous trouvez tout ici ',
}) => {
    return (
        <header className="header--dashboard">
            <div className="header__left">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            {/* We decided to not implement the header Search component */}
            {/* <div className="header__center">
                <FormHeaderSearch />
            </div> */}
            <div className="header__right">
                <a className="header__site-link" href={shopUrl} target="_blank">
                    <span>Consultez votre boutique</span>
                    <i className="icon-exit-right"></i>
                </a>
            </div>
        </header>
    );
};

export default HeaderDashboard;
