import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = newContact => {
    this.setState(firstState => {
      return {
        contacts: [newContact, ...firstState.contacts],
      };
    });
  };

  deleteContact = id => {
    this.setState(firstState => {
      return {
        contacts: firstState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  search = () => {
    const normalized = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter(contact => {
      return `${contact.name}${contact.number}`
        .toLowerCase()
        .includes(normalized);
    });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
          change={this.change}
        />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} change={this.change} />
        <ContactList
          contacts={this.search()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
