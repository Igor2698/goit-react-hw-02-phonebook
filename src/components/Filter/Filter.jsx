import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.centerContainer}>
      <h2>Contacts</h2>
      <div className={css.contFilter}>
        <input
          className={css.filterInput}
          placeholder=" "
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
        <label htmlFor="filter">Find contact</label>
      </div>
    </div>
  );
};
