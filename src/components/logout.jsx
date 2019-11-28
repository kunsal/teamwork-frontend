import React, { Component } from "react";
import { connect } from 'react-redux';
import { LOGOUT } from "../redux/actions/types";
import Loading from "./common/loading";
import { withRouter } from 'react-router-dom';

class Logout extends Component {
  state = {
    loading: false
  }

  componentDidMount() {
    this.props.logoutUser();
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div style={{ height: '500px' }}>
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col col-sm-6">
                  <Loading />
                </div> 
            </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch({type: LOGOUT})
});

export default connect(null, mapDispatchToProps)(withRouter(Logout));
