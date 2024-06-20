import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import Layout from "../../components/Layout/Layout";

export default function LoginPage() {
  return (
    <Layout>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </Layout>
  );
}