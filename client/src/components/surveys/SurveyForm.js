// This shows a form that alloaws a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields(){
        return _.map(formFields, ({ label, name }) => {
            
        });
    }
    
    render(){
        return(
            <div>
            
            </div>    
        );
    }
}

function validate(values){
    const errors = {};
    
    errors.recipients = validateEmails(values.recipients || '');

     _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);