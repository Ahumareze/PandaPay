import React, {useState} from 'react';
import './LandingPage.css';

//Imported packages
import { connect } from 'react-redux';

//Components
import Header from './components/Header';
import Form from './components/Form';

import * as actions from '../../Redux/actions';
import { Loader } from '../../Components';

function LandingPage(props: any) {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className='LandingPage'>
            <Header setLogin={(e) => setIsLogin(e)} isLogin={isLogin} />
            <div className='LandingPageBody'>
                <div className='LandingPageDetails'>
                    <p><span>Easy </span>way <br/>to <br/>transfer <br />money</p>
                </div>
                <div className="LandingPageFormContainer">
                    {!props.loading ?
                        <Form 
                            isLogin={isLogin} 
                            setLogin={(e) => setIsLogin(e)}
                            authLogin={(e) => props.login(e)}
                            authSignup={(e) => props.signup(e)}
                            errorMessage={props.errorMessage}
                        />
                    :
                        <Loader />
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return{
        loading: state.loading,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        signup: (e: object) => dispatch(actions.AuthSignup(e)),
        login: (e: object) => dispatch(actions.AuthLogin(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);