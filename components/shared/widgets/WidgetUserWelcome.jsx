import React from 'react';
import {logOut} from '~/store/auth/action';
import { connect } from 'react-redux';

const WidgetUserWelcome = (props) => {

    return (
        <div className="ps-block--user-wellcome">
            <div className="ps-block__left">
                <img src="/img/user/admin.jpg" alt="" />
            </div>
            <div className="ps-block__right">
                <p>
                    Bonjour,<a href="#">{props.user != null ? props.user.username : null}</a>
                </p>
            </div>
            <div className="ps-block__action">
                <a onClick={()=>props.dispatch(logOut())}>
                    <i className="icon-exit"></i>Logout
                </a>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return state.auth;
};

export default connect(mapStateToProps)(WidgetUserWelcome);
