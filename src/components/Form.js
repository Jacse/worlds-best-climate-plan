import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FaCircleNotch, FaUserEdit } from 'react-icons/fa';

const FormField = ({ name, label, type = 'text', className }) => (
  <Field name={name}>
    {({
      field, // { name, value, onChange, onBlur }
      meta,
    }) => (
      <label className={className}>
        <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          {label}
        </p>
        <input
          className={`w-full bg-gray-300 text-gray-700 border border-${
            meta.touched && meta.error ? 'red' : 'gray'
          }-500 rounded py-3 px-4 mb-3 focus:outline-none focus:bg-gray-200`}
          type={type}
          {...field}
        />
        {meta.touched && meta.error && (
          <p className="text-red-500 text-s italic mb-3">{meta.error}</p>
        )}
      </label>
    )}
  </Field>
);

const Checkbox = ({ name, label }) => (
  <Field name={name}>
    {({
      field, // { name, value, onChange, onBlur }
      meta,
    }) => (
      <label className="block">
        <div className="flex mb-3">
          <input className="mr-2" type="checkbox" {...field} />
          <p className="flex-grow text-gray-700 text-s">{label}</p>
        </div>
        {meta.touched && meta.error && (
          <p className="text-red-500 text-s italic mb-3">{meta.error}</p>
        )}
      </label>
    )}
  </Field>
);

const SupportForm = () => {
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
          errors.email = 'Dette felt er påkrævet';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'E-mail adressen ser ugyldig ud';
        }
        if (!values.firstname) {
          errors.firstname = 'Dette felt er påkrævet';
        }
        if (!values.lastname) {
          errors.lastname = 'Dette felt er påkrævet';
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
        <Form className="md:max-w-2xl mx-auto my-8">
          {isSubmitted && !error && (
            <div>
              <h3 className="font-bold mb-3">Tak for din underskrift!</h3>
              <p>
                Vi sender dig en email så snart borgerforlaget er klar til at
                underskrive. Vi sender også emails om kampagnen, som du
                selvfølgelig kan framelde hvis du ikke ønsker at høre fra os. Er
                du i tvivl om noget? Skriv til os på
                info@verdensbedsteklimaplan.dk
              </p>
            </div>
          )}
          {(!isSubmitted || error) && (
            <React.Fragment>
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3"
                  role="alert"
                >
                  <span>Noget gik galt. Prøv ventligst igen</span>
                </div>
              )}
              <div className="sm:flex sm:-mx-2">
                <FormField
                  className="w-full sm:w-1/2 sm:mx-2"
                  name="firstname"
                  label="Fornavn"
                />
                <FormField
                  className="w-full sm:w-1/2 sm:mx-2"
                  name="lastname"
                  label="Efternavn"
                />
              </div>
              <div className="sm:flex sm:-mx-2">
                <FormField
                  className="w-full sm:w-1/3 sm:mx-2"
                  name="zip"
                  label="Postnummer"
                />
                <FormField
                  className="w-full sm:w-2/3 sm:mx-2"
                  name="email"
                  type="email"
                  label="Email"
                />
              </div>
              <FormField name="organisation" label="Evt. organisation" />
              <Checkbox
                name="subscribe"
                label="Jeg giver tilladelse til at  Verdens Bedste Klimaplan må
                gemme mine oplysninger og kontakte mig på email"
              />
              <Checkbox
                name="anon"
                label="Jeg vil være anonym (vi viser ikke dit navn på sitet)"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                {isSubmitting ? (
                  <FaCircleNotch style={{ animation: 'spin 1s infinite' }} />
                ) : (
                  <FaUserEdit />
                )}
                <span className="flex-1 ml-4">Skriv under nu</span>
              </button>
            </React.Fragment>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SupportForm;
