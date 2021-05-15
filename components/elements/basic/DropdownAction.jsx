import React from 'react';
import { Dropdown, Menu } from 'antd';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

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
                <Popconfirm onConfirm={(e)=>(handleDelete())} title="Etes-vous sûr que vous voulez supprimer？" icon={<QuestionCircleOutlined style={{ color: 'red' }}  />}>
                    <a className="dropdown-item" href="#" >
                        <i className="icon-trash2 mr-2"></i>
                        supprimer
                    </a>
                </Popconfirm>
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
