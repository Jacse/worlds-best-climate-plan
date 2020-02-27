import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FaCircleNotch, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import Button from '../Button';

const FormField = ({ name, label, type = 'text', className, ...props }) => (
  <Field name={name}>
    {({
      field, // { name, value, onChange, onBlur }
      meta,
    }) => (
      <label className={className}>
        <p className="block text-green-700 mb-2">{label}</p>
        <input
          className={classNames(
            'w-full border-2 rounded-sm py-3 px-4 focus:border-green-500 bg-sand-100',
            {
              'border-red-700 mb-2': meta.touched && meta.error,
              'border-green-700 mb-6': !(meta.touched && meta.error),
            }
          )}
          type={type}
          {...field}
          {...props}
        />
        {meta.touched && meta.error && (
          <p className="text-red-500 text-s italic mb-4">{meta.error}</p>
        )}
      </label>
    )}
  </Field>
);

const SupportForm = ({ modal = false, closeModal, className }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  return (
    <section
      className={classNames('mx-auto max-w-4xl p-8 bg-sand-100', className)}
    >
      <div className="mx-auto max-w-lg">
        <Formik
          initialValues={{
            email: '',
            firstname: '',
            lastname: '',
            zip: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.firstname) {
              errors.firstname = 'Dette felt er påkrævet';
            }
            if (!values.lastname) {
              errors.lastname = 'Dette felt er påkrævet';
            }
            if (!values.email) {
              errors.email = 'Dette felt er påkrævet';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'E-mail adressen ser ugyldig ud';
            }
            const zipNum = parseInt(values.zip, 10);
            if (
              isNaN(zipNum) ||
              values.zip.length !== 4 ||
              zipNum > 9999 ||
              zipNum < 0
            ) {
              errors.zip = 'Postnummeret skal bestå af 4 tal';
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
            <Form className="md:max-w-2xl mx-auto">
              {isSubmitted && !error && (
                <div>
                  <h2 className="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
                    Tak for hjælpen
                  </h2>
                  <p className="mb-4 sm:mb-8 sm:text-center">
                    Husk at tjekke din mail og bekræfte din tilmeldelse.
                  </p>
                </div>
              )}
              {(!isSubmitted || error) && (
                <React.Fragment>
                  <h2 className="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
                    Følg med og hjælp til
                  </h2>
                  <p className="mb-4 sm:mb-8 sm:text-center">
                    Borgerforslaget er første skridt i at indføre klimabidrag-
                    og dividende i Danmark. Skriv dig op til nyheder og støt
                    kampen for at løse klimakrisen på den mest effektive og
                    socialt retfærdige måde.
                  </p>
                  {error && (
                    <div
                      className="border-2 text-red-700 border-red-700 px-4 py-3 rounded-sm mb-4 sm:mb-8"
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
                      className="w-full sm:w-2/3 sm:mx-2"
                      name="email"
                      type="email"
                      label="Email"
                    />
                    <FormField
                      className="w-full sm:w-1/3 sm:mx-2"
                      name="zip"
                      label="Postnummer"
                      maxLength={4}
                    />
                  </div>
                  {isSubmitting ? (
                    <div className="text-4xl text-green-500 sm:flex sm:justify-center">
                      <FaCircleNotch
                        style={{ animation: 'spin 1s infinite ease-in-out' }}
                      />
                    </div>
                  ) : (
                    <Button type="submit" className="block sm:mx-auto">
                      Skriv dig op 📮
                    </Button>
                  )}
                </React.Fragment>
              )}
              {modal && (
                <div
                  className="absolute top-0 right-0 cursor-pointer p-8"
                  onClick={closeModal}
                >
                  <FaTimes />
                </div>
              )}
              {modal && (
                <span
                  className="block mt-6 cursor-pointer sm:hidden"
                  onClick={closeModal}
                >
                  Luk vinduet
                </span>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default SupportForm;
