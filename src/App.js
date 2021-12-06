import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

// const INITIAL_FORM_STATE = { name: '', number: '' };

class App extends Component {
  state = { contacts: [], filter: '' };

  updateContacts = (name, number) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  updateFilter = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm changeContacts={this.updateContacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} changeFiler={this.updateFilter} />
        <ContactList contacts={contacts} filter={filter} />
      </div>
    );
  }
}

export default App;
