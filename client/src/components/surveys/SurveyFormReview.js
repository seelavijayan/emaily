// SurveyFromReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { useNavigate } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const navigate = useNavigate();

    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please Confirm Your Entries</h5>
            {reviewFields}
            <button className='yellow darken-3 white-text btn-flat' onClick={onCancel}>Back</button>
            <button className='green btn-flat white-text right' onClick={() => submitSurvey(formValues, navigate)}>Send Survey<i className='material-icons right'>email</i></button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
