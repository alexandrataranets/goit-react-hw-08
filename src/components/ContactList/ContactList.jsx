import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <h2 className={css.title}>Contact list</h2>
      <ul className={css.contactlist}>
        {visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.contactlist_item}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}