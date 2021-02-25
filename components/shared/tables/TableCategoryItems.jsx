import React from 'react';

const TableCategoryItems = () => {
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>Nom de la catégorie</th>
                        <th>Slug</th>
                        <th>Creé le</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Babies &amp; Moms</strong>
                        </td>
                        <td>babies-and-moms</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Editer
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Supprimer
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Clothing &amp; Apparel</strong>
                        </td>
                        <td>clothing-and-apparel</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Editer
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Supprimer
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Electronic</strong>
                        </td>
                        <td>clothing-and-apparel</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Editer
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Supprimer
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Home Garden &amp; Kitchen</strong>
                        </td>
                        <td>Home-garden-and-kitchen</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Editer
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Supprimer
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Computer &amp; Technologies</strong>
                        </td>
                        <td>computer-and-technologies</td>
                        <td>Jul 21, 2020</td>
                        <td>
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="icon-ellipsis"></i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        Editer
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Supprimer
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableCategoryItems;
