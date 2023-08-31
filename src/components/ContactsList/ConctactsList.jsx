import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
const ContactsList = ({ onDeleteContact, filtered }) => {
  return (
    <div className={css.contListCont}>
      <ul className={css.contListList}>
        {filtered.map(({ id, name, number }) => (
          <li key={id} className={css.contListItem}>
            <p className={css.contListText}>
              {name}: {number}
            </p>

            <button
              type="button"
              className={css.contactList__btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  filtered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
