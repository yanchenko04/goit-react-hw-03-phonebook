import propTypes from 'prop-types';
import css from './ContactsList.module.css'


export default function ContactList({ contacts, onDeleteContact }) {
  return (
    
      <ul className={css.contact_list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contact_item} >
            <p>
            <span className={css.contact_name}>{contact.name}: </span>
            <span className={css.contact_number}>{contact.number}</span>
            </p>
           

            <button type="button" className={css.delete_btn} onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onDeleteContact: propTypes.func.isRequired,
};