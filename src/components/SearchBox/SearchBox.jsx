import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors.js";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { setFilter } from "../../redux/filters/slice.js";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const id = useId();
  const handleFilterChange = (filter) => dispatch(setFilter(filter));

  return (
    <div className={css.searchBox_container}>
      <label htmlFor={id} className={css.searchBox_title}>
        Find contacts by name
      </label>
      <input
        className={css.searchBox_input}
        type="text"
        id={id}
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
}