import Layout from "../../components/Layout/Layout";
import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

export default function NotFoundPage({ children }) {
  return (
    <Layout>
      <p className={css.error}>
        {children} Please go to{" "}
        <Link to="/" className={css.link}>
          Home page
        </Link>
      </p>
    </Layout>
  );
}