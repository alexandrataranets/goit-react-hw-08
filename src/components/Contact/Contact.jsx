import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import Button from "../Button/Button";
import { useMedia } from "../../hooks/useMedia";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () =>
    dispatch(deleteContact(id))
      .then(() => {
        toast.success("Contact deleted!");
      })
      .catch(() => {
        toast.error("Contact not deleted!! Please try again!");
      });

  const isWide = useMedia("(max-width: 767px)");

  return (
    <div>
      {isWide ? (
        <div className={css.contact_container}>
          <div className={css.contact_descr}>
            <p className={css.contact_descr_name}>
              <IoPersonSharp size={16} className={css.contact_descr_icon} />
              {name}
            </p>
            <Button onClick={handleDelete} style={{ margin: 0 }}>
              <MdDelete size={24} />
            </Button>
          </div>
          <p className={css.contact_descr_number}>
            <FaPhoneAlt size={16} className={css.contact_descr_icon} />
            {number}
          </p>
        </div>
      ) : (
        <div className={css.contact_container}>
          <div className={css.contact_descr}>
            <p className={css.contact_descr_name}>
              <IoPersonSharp size={16} className={css.contact_descr_icon} />
              {name}
            </p>
            <p className={css.contact_descr_number}>
              <FaPhoneAlt size={16} className={css.contact_descr_icon} />
              {number}
            </p>
          </div>
          <Button onClick={handleDelete} style={{ margin: 0 }}>
            <MdDelete size={32} />
          </Button>
        </div>
      )}
    </div>
  );
}