import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form'; // specifically for REDUX FORM had to be called reducer, so we changed the name
import authReducer from './authReducers';
import  surveysReducer from "./surveysReducer";

export default combineReducers({
    auth:authReducer,
    form: reduxForm,
    surveys:surveysReducer
});