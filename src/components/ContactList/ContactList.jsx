import { useSelector } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contListArea}>
      {filteredContacts.length === 0 && <p>No matches found in the contacts</p>}
      {filteredContacts.length > 0 &&
        filteredContacts.map(elm => {
          return <Contact key={elm.id} {...elm} />;
        })}
    </ul>
  );
};

export default ContactList;