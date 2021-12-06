import { Component } from 'react';
import { s } from './ContactItem.module.css';

class ContactItem extends Component {
  render() {
    const { contact } = this.props;

    return (
      <li>
        {contact.name}:{contact.number}
      </li>
    );
  }
}

export default ContactItem;
