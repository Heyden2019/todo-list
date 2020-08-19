import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import TextField from '@atlaskit/textfield';
import { ErrorMessage } from '@atlaskit/form';

const maxLength100 = maxLengthCreator(100);

const renderField = ({
        input,
        meta: { error, active, submitFailed, invalid }
    }) => (<>
        <TextField {...input} placeholder={"Add a new item"} />
        {   (submitFailed && active && error === 'Field  required' && 
                <ErrorMessage>
                    {error}
                </ErrorMessage>) 
            || 
            (invalid && error !== 'Field  required' &&
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>)
        }
    </>)

const NewIssueForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="issueTitle"
                type="text"
                component={renderField}
                validate={[maxLength100, required]}
            />
        </form>
    )
}

export default reduxForm({
    form: 'newIssueForm'
})(NewIssueForm)