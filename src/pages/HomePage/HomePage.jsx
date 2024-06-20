import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Layout from "../../components/Layout/Layout";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <Layout>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 className={css.title_major}>Contacts book</h1>
      </div>
    </Layout>
  );
}