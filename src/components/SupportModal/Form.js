import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  FaGlobeAfrica,
  FaCircleNotch,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
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

const SupportForm = ({ closeModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
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
        fetch(
          'https://us-central1-boxwood-academy-251913.cloudfunctions.net/addRecipient',
          { method: 'POST', body: new URLSearchParams(values) }
        )
          .then(res => res.json())
          .then(res => {
            if (res.err) {
              setError(true);
            } else {
              setIsSubmitted(true);
            }
            setSubmitting(false);
          })
          .catch(() => {
            setError(true);
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form
          className={[
            styles.form,
            isSubmitting ? styles.isSubmitting : '',
          ].join(' ')}
        >
          <h2 className={styles.icon}>
            {isSubmitting ? (
              <FaCircleNotch className={styles.spinner} />
            ) : isSubmitted ? (
              <FaCheckCircle />
            ) : error ? (
              <FaExclamationCircle />
            ) : (
              <FaGlobeAfrica />
            )}
          </h2>
          {(isSubmitted || error) && (
            <React.Fragment>
              <h2>
                {isSubmitted
                  ? text.supportModal.thanksText
                  : text.supportModal.errorText}
              </h2>
              <Button onClick={closeModal} className={styles.submitButton}>
                OK
              </Button>
            </React.Fragment>
          )}
          {!(isSubmitted || error) && (
            <React.Fragment>
              <h2>{text.supportModal.header}</h2>
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
                name="subscribe"
                label={text.supportModal.receiveUpdatesCheckbox}
                type="checkbox"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {text.supportModal.supportButton}
              </Button>
            </React.Fragment>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SupportForm;
