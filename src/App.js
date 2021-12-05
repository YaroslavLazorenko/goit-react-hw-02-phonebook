import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

const INITIAL_FORM_STATE = { name: '', number: '' };

class App extends Component {
  state = { contacts: [], name: '', number: '', filter: '' };

  resetForm = () => {
    this.setState(INITIAL_FORM_STATE);
  };

  handleCange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      };
    });

    this.resetForm();
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form action="#" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleCange}
          />
          <label htmlFor="number">Number:</label>
          <input
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Enter phone"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleCange}
          />

          <button type="submit">Add contact</button>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input
            type="text"
            name="filter"
            placeholder="Enter name"
            value={filter}
            onChange={this.handleCange}
          ></input>
          <ul>
            {contacts
              .filter(contact => contact.name.includes(filter))
              .map(contact => {
                return (
                  <li key={contact.name}>
                    {contact.name}:{contact.number}
                  </li>
                );
              })}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
