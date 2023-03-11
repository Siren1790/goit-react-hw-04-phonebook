import React, { useState, useEffect } from 'react';
import { ContactForm, ContactList, Filter } from './';
import { nanoid } from 'nanoid';
import { PhoneBookStyled } from './App.module';
import { PropTypes } from 'prop-types';

const LocalKey = 'Contacts';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const PhoneBook = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LocalKey)) ?? defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LocalKey, JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
  };
  const addContact = (contact, number) => {
    let prevContacts = contacts.map(({ name }) => name.toLocaleLowerCase());
    let isRepeatContact = prevContacts.includes(contact.toLocaleLowerCase());
    if (isRepeatContact) {
      alert(`${contact} is already in contacts`);
      return;
    }
    const obj = {
      id: nanoid(),
      name: contact,
      number: number,
    };

    setContacts(prevState => [...prevState, obj]);
  };
  const filtered = evt => {
    const filterValue = evt.target.value;
    setFilter(filterValue.toLocaleLowerCase());
  };

  const deleted = id => {
    setContacts(prevState => {
      let contacts = prevState.filter(contact => contact.id !== id);
      return [...contacts];
    });
  };

  return (
    <PhoneBookStyled>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filtered} />
      <ContactList contacts={filterContacts} onDelete={deleted} />
    </PhoneBookStyled>
  );
};
export const App = () => {
  return <PhoneBook />;
};

PhoneBook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
