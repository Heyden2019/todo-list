import React, {FC} from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import TextField from '@atlaskit/textfield';
import { ErrorMessage } from '@atlaskit/form';
import {FormValuesType} from "./FormAndPreloader";
import {WrappedFieldProps} from 'redux-form/lib/Field'

const maxLength100 = maxLengthCreator(100);

const renderField: FC<WrappedFieldProps> = ({
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

const NewIssueForm: FC<InjectedFormProps<FormValuesType>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="issueTitle"
                type="text"
                component={renderField}
                validate={[maxLength100, required]}
            />
        </form>
    )
}

export default reduxForm<FormValuesType>({
    form: 'newIssueForm'
})(NewIssueForm)