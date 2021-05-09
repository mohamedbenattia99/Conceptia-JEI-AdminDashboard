import React from 'react';
import { Dropdown, Menu } from 'antd';
import connect from "react-redux/lib/connect/connect";
import Link from "next/link";
const DropdownAction = ({handleDelete,handleUpdate}) => {



    const menuView = (
        <Menu>



            <Menu.Item key={0}>

                <a className="dropdown-item" onClick={handleUpdate} >
                    <i className="icon-pencil mr-2"></i>
                    mise à jour
                </a>

                </Menu.Item>

            <Menu.Item key={0}>
                <a className="dropdown-item" href="#" onClick={handleDelete}>
                    <i className="icon-trash2 mr-2"></i>
                    supprimer
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menuView} className="ps-dropdown">
            <a
                onClick={(e) => e.preventDefault()}
                className="ps-dropdown__toggle">
                <i className="icon-ellipsis"></i>
            </a>
        </Dropdown>
    );
};

export default DropdownAction;
