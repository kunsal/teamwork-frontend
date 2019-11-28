import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from '../services/teamwork-api';
import { connect } from 'react-redux';
import { LOGIN } from "../redux/actions/types";
import Loading from "./common/loading";
import { withRouter } from 'react-router-dom';

class Login extends Form {
  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {},
    error: '',
    loading: false
  }

  schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required().label('Email'),
    password: Joi.string().required().label('Password')
  }

  doSubmit = async (e) => {
    const { from } = this.props.location.state || {from: {pathname: '/'}}
    this.setState({ loading: true })
    try {
      const { email, password } = this.state.data;
      const response = await login(email, password);
      this.setState({ loading: false });
      this.props.saveUser(response.data)
      this.props.history.replace(from);
    } catch (e) {
      this.setState({ loading: false })
      this.setState({ error: e.message })
    }
  }

  setErrorState = () => {
    this.setState({ error: '' })
  }

  render() {
    return (
      <div style={{ height: '500px' }}>
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col col-sm-6">
                  <div className="alert alert-info">
                    <h4 className="alert-heading">Welcome to TEAMWORK</h4>
                    <p>Please login with your email and password</p>
                  </div>
                  { this.state.error ? 
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      { this.state.error }
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.setErrorState}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div> : '' }
                  <form onSubmit={this.handleSubmit} className="form">
                    { this.renderInput('email', 'Email') }
                    { this.renderInput('password', 'Password', 'password') }
                    { this.state.loading ? <Loading /> : '' }
                    { this.renderSubmitButton('Login') } 
                  </form>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (user) => dispatch({type: LOGIN, user})
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
