import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import Button from "../Button/Button";
import toast from "react-hot-toast";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.success("Logout successful!");
      })
      .catch((e) => {
        console.log(e.message);
        toast.error("Logout failed!");
      });
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;