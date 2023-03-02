import css from './SearchInput.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
export const SearchInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div className={css.Search__container}>
      <p className={css.Search__title}>Search contact by name</p>
      <input
        type="text"
        className={css.Search__input}
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      ></input>
    </div>
  );
};
