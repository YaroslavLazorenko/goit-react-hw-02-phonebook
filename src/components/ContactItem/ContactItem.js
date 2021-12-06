import { Component } from 'react';
import { s } from './ContactItem.module.css';

class ContactItem extends Component {
  render() {
    const { contact, deleteContact } = this.props;

    return (
      <li>
        <span>
          {contact.name}:{contact.number}
        </span>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </li>
    );
  }
}

export default ContactItem;
