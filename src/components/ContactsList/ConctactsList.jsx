import css from './ContactsList.module.css';
export const ContactsList = ({ onDeleteContact, filtered, contacts }) => {
  return (
    <div className={css.contListCont}>
      <ul>
        {filtered.map(({ id, name, number }) => (
          <li key={id}>
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
      {filtered.length === 0 && contacts.length > 0 && (
        <p>No one found with that name</p>
      )}
      {contacts.length === 0 && (
        <p>Please add contact by click on "Add conctact" button</p>
      )}
    </div>
  );
};
