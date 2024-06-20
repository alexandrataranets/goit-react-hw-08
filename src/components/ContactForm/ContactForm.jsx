import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import Button from "../Button/Button";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export default function ContactForm() {
  const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(phoneRegExp, "Must be a valid number ххх-хх-хх!")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.name,
          number: values.number,
        };
        dispatch(addContact(newContact))
          .then(() => {
            toast.success("Contact added!");
          })
          .catch(() => {
            toast.error("Contact not added!! Please try again!");
          });
        actions.resetForm();
      }}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Add contact</h2>
        <div className={css.container}>
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
            <label className={css.form_input_title} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={css.form_input}
              type="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.form_error}
              name="number"
              component="span"
            />
          </div>
        </div>

        <Button type="submit" style={{ width: "100%" }}>
          Add contact
        </Button>
      </Form>
    </Formik>
  );
}