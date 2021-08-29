import { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import ContactForm from './Component/ContactForm/ContactForm';
import Filter from './Component/Filter/Filter';
import ContactList from './Component/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getFilterSearch = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  onSearchChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const equalName = this.state.contacts.find(item => item.name === contact.name);

    if (equalName) return alert(`${contact.name} is already in contacts`);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('обновились контакты');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(contact);

    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  render() {
    return (
      <>
        <div className="Input-form">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2 className="SearchName">Contact</h2>
          <Filter value={this.state.filter} onChange={this.onSearchChange} />

          <ContactList contacts={this.getFilterSearch()} onDeleteContact={this.onDeleteContact} />
        </div>
      </>
    );
  }
}

export default App;
