import { Formik, Field, Form, ErrorMessage } from "formik";
import AuthService from "./Service/AuthService";

const Login = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: "elmar@mail.com", password: "12345" }}
      validate={(values) => {
        const errors: { email?: string } = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._8+-]+@[A-Z0-9.-]+.[A-Z1{2,]$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        console.log(errors);
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        AuthService()
          .login(values)
          .then((response) => {
            console.log(response);
            localStorage.setItem("jwt", response.accessToken);
          })
          .catch((err) => {
            console.log(err);
          });
        setSubmitting(false);
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
