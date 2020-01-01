import React from 'react';
import { Formik, Form, Field } from 'formik';
import Button from '../Button';
import text from '../../i18n/da';
import styles from './index.module.css';

const FormField = ({ name, label, type = 'text' }) => (
  <Field name={name}>
    {({
      field, // { name, value, onChange, onBlur }
      meta,
    }) => (
      <label
        className={[
          styles.field,
          meta.touched && meta.error ? styles.fieldWithError : '',
          type === 'checkbox' ? styles.fieldWithCheckbox : '',
        ].join(' ')}
      >
        <div>{label}</div>
        <input type={type} {...field} />
        {meta.touched && meta.error && (
          <div className={styles.errorText}>{meta.error}</div>
        )}
      </label>
    )}
  </Field>
);

const SupportForm = ({ children }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        firstname: '',
        lastname: '',
        organisation: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = text.supportModal.fieldRequired;
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = text.supportModal.emailInvalid;
        }
        if (!values.firstname) {
          errors.firstname = text.supportModal.fieldRequired;
        }
        if (!values.lastname) {
          errors.lastname = text.supportModal.fieldRequired;
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormField name="firstname" label={text.supportModal.firstname} />
          <FormField name="lastname" label={text.supportModal.lastname} />
          <FormField
            name="organisation"
            label={text.supportModal.organisation}
          />
          <FormField
            name="email"
            label="Email"
            type={text.supportModal.email}
          />
          <FormField
            name="support"
            label={text.supportModal.supportCheckbox}
            type="checkbox"
          />
          <FormField
            name="support"
            label={text.supportModal.receiveUpdatesCheckbox}
            type="checkbox"
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SupportForm;
