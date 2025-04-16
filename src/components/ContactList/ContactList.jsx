import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import  {setFilter}  from '../../redux/contactsSlice';
import './ContactList.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(setFilter.toLowerCase())
  );

  return (
    <div className='contactList'>
      <h1>Список контактів</h1>
        <ul>
          {filterContacts.map(contact => (
            <li key={contact.id} className='contactItem'>
              <div className='info'>
                    <span className='contactName'>{contact.name}</span>
                    <span className='contactNumber'>{contact.number}</span>
              </div>
              <button onClick={() => dispatch(deleteContact(contact.id))}
                className='deletebtn'>
                    Видалити
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};


