import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

//Imported packages
import {Redirect, Route, Switch} from 'react-router-dom';

//Imported components
import { LandingPage, HomePage, TransactionPage } from './Screens/index';
import * as actions from './Redux/actions';

function App(props:any) {

  useEffect(() => {
    props.init();
  }, []);

  const auth = (
    <Switch>
      <Route path='/' component={LandingPage} exact />
      <Redirect to='/' />
    </Switch>
  )

  const main = (
    <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/transaction' component={TransactionPage} />
        <Redirect to='/home' />
    </Switch>
  )
  
  return (
    <div className="App">
      {props.token ? main : auth }
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