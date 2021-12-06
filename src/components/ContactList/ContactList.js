import { Component } from 'react';
import ContactItem from '../ContactItem';
import { s } from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;

    return (
      <ul>
        {contacts
          .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
          .map(contact => {
            return <ContactItem contact={contact} key={contact.name} />;
          })}
      </ul>
    );
  }
}

export default ContactList;