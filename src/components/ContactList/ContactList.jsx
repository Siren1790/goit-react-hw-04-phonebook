import {
  ListOfContact,
  Container,
  ContactItem,
  Button,
  Paragraph,
} from './ContactList.module';
import { PropTypes } from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Container>
      <ListOfContact>
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            <Paragraph>Name: {name}</Paragraph>
            <Paragraph>Tel: {number}</Paragraph>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </ContactItem>
        ))}
      </ListOfContact>
    </Container>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};