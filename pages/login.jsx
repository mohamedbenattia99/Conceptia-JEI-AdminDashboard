import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {login} from '~/store/auth/action';
import {Form, Input, notification} from 'antd';
import {connect} from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: "",
                password: ""
            },
        }
    }

    static getDerivedStateFromProps(props) {
        /* if (props.isLoggedIn === true) {
             Router.push('/');
         }*/
        return false;
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleChange = input => e => {
        const data = {...this.state.data}
        data[e.target.name] = e.target.value;
        this.setState({data});
    }
    handleLoginSubmit = e => {
        const userData = {
            identifier: this.state.data.email,
            password: this.state.data.password
        };

        this.props.dispatch(login(userData));


    };

    render() {
        return (
            <div className="ps-my-account">
                <style jsx>{`
                  .container {
                    margin: 100px auto;
                    width: 500px;
                  }

                  p {
                    color: blue;
                  }
                `}</style>
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onClick={this.handleLoginSubmit.bind(this)}>

                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Login to your account</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                type: "email",
                                                message:
                                                    'Enter a valid email address.',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="Email address..."
                                            onChange={this.handleChange('email')}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please enter your password.',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            placeholder="Password..."
                                            name="password"
                                            onChange={this.handleChange('password')}
                                        />
                                    </Form.Item>
                                </div>

                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth" style={{background: 'grey'}}>
                                        Login
                                    </button>
                                </div>
                            </div>

                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Login);
