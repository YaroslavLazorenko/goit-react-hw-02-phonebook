import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

const INITIAL_STATE = { name: '' };

class App extends Component {
  state = { contacts: [], name: '' };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  handleCange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { id: nanoid(), name: this.state.name }] };
    });

    this.resetForm();
  };

  render() {
    const { contacts, name } = this.state;

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

          <button type="submit">Add contact</button>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(contact => {
              return <li key={contact.name}>{contact.name}</li>;
            })}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
