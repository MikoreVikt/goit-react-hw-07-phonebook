import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} number={phone} />
        ))}
    </List>
  );
};
