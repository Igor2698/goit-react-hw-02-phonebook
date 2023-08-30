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
      {!contacts.length && (
        <p>Please add contact by click on "Add conctact" button</p>
      )}
      {!filtered.length && contacts.length && (
        <p>No one found with that name</p>
      )}
    </div>
  );
};
