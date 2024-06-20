import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useMedia } from "../../hooks/useMedia";
import { IoMdContacts } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const isWide = useMedia("(max-width: 767px)");
  return (
    <div>
      {isWide ? (
        <nav className={css.container}>
          <NavLink className={buildLinkClass} to="/">
            <FaHome size={24} />
          </NavLink>
          {isLoggedIn && (
            <NavLink className={buildLinkClass} to="/contacts">
              <IoMdContacts size={24} />
            </NavLink>
          )}
        </nav>
      ) : (
        <nav className={css.container}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink className={buildLinkClass} to="/contacts">
              Contacts
            </NavLink>
          )}
        </nav>
      )}
    </div>
  );
};

export default Navigation;