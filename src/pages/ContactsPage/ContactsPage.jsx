import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Layout from "../../components/Layout/Layout";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      {loading && !error && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && contacts.length === 0 && (
        <p>
          <b>Please add your first contact!</b>
        </p>
      )}
      {contacts.length > 0 && (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
    </Layout>
  );
}