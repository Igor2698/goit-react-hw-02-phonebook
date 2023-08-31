import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.centerContainer}>
      <h2 className={css.filterTitle}>Contacts</h2>
      <div className={css.contFilter}>
        <input
          className={css.filterInput}
          placeholder=" "
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
        <label className={css.filterPlaceholder} htmlFor="filter">
          Find contact
        </label>
      </div>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
