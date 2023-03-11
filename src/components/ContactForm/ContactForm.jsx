import React, { Component } from 'react';
import { Input, Form, Button } from './ContactForm.module';
import { PropTypes } from 'prop-types';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }
  updateState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitContactForm = event => {
    event.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    event.target.reset();
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <Form onSubmit={this.submitContactForm}>
        <h2>Name</h2>
        <Input
          type="text"
          name="name"
          onChange={this.updateState}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>Number</h2>
        <Input
          type="tel"
          onChange={this.updateState}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add Contacts</Button>
      </Form>
    );
  }
}

ContactForm.protoTypes = {
  addContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};