import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import Button from "../Button/Button";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const RegistrationFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        const registerInfo = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        dispatch(register(registerInfo))
          .unwrap()
          .then(() => {
            toast.success("Registration successful!");
          })
          .catch(() => {
            toast.error("Registration error! Please try again!");
          });
        actions.resetForm();
      }}
      validationSchema={RegistrationFormSchema}
    >
      <Form className={css.form}>
        <div className={css.form_input_container}>
          <label className={css.form_input_title} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.form_input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.form_error}
            name="name"
            component="span"
          />
        </div>

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
          Registration
        </Button>
      </Form>
    </Formik>
  );
}