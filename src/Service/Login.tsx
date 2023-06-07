import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Login = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: "example@mail.com", password: "eXaMpLe" }}
      validate={(values) => {
        const errorsEm = { email: "" };
        const errorsPw = { password: "" };


        if (!values.email) {
          errorsEm.email = "Required";
        } else if (
          !/^[A-Z0-9._8+-]+@[A-Z0-9.-]+.[A-Z1{2,]$/i.test(values.email)
        ) {
          errorsEm.email = "Invalid email address";
        }
        // if (!values.password) {
        //   errorsPw.password = "Required";
        // }
        // return [errorsEm, errorsPw];
        return errorsEm;

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
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />{" "}
          <button type="submit" disabled={isSubmitting}>
            Submit{" "}
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
