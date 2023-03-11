import React, { useState } from 'react';
import { Input, Form, Button } from './ContactForm.module';
import { PropTypes } from 'prop-types';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const updateState = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Danger');
    }
  };
  const submitContactForm = event => {
    event.preventDefault();
    addContact(name, number);
    event.target.reset();
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={submitContactForm}>
      <h2>Name</h2>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={updateState}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h2>Number</h2>
      <Input
        type="tel"
        onChange={updateState}
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contacts</Button>
    </Form>
  );
};

ContactForm.protoTypes = {
  addContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
