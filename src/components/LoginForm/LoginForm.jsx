import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import Button from "../Button/Button";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function LoginForm() {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase char")
      .matches(/[A-Z]/, "Password must contain at least one uppercase char")
      .matches(
        /[a-zA-Z]+[^a-zA-Z\s]+/,
        "at least 1 number or special char (@,!,#, etc)."
      )
      .required("Required"),
  });

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        const LogInInfo = {
          email: values.email,
          password: values.password,
        };
        dispatch(logIn(LogInInfo))
          .unwrap()
          .then(() => {
            toast.success("Login successful!");
          })
          .catch((e) => {
            console.log(e.message);
            toast.error("Login error! Please try again!");
          });
        actions.resetForm();
      }}
      validationSchema={LoginFormSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.form_input_container}>
          <label className={css.form_input_title} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={css.form_input}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage
            className={css.form_error}
            name="email"
            component="span"
          />
        </div>

        <div className={css.form_input_container}>
          <label className={css.form_input_title} htmlFor={passwordFieldId}>
            Password
          </label>
          <Field
            className={css.form_input}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.form_error}
            name="password"
            component="span"
          />
        </div>

        <Button type="submit" style={{ width: "100%", marginTop: 24 }}>
          Log in
        </Button>
      </Form>
    </Formik>
  );
}