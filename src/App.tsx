import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

//Imported packages
import {Route, Switch} from 'react-router-dom';

//Imported components
import { LandingPage, HomePage, TransactionPage } from './Screens/index';
import * as actions from './Redux/actions/index';

function App(props:any) {

  useEffect(() => {
    props.init();
  }, []);
  
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/transaction' component={TransactionPage} />
        <Route path='/' component={LandingPage} exact />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return{
    token: state.token
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
      init: () => (dispatch(actions.init()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);