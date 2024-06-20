import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Layout from "../../components/Layout/Layout";

export default function RegisterPage() {
  return (
    <Layout>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
    </Layout>
  );
}