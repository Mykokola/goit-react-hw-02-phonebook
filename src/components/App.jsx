import React from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactListFilter } from './ContactListFilter/ContactListFilter';
import { ContactList } from './ContactList/ContactList';
class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  addFormNameTel = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  deleteContact = e => {
    e.preventDefault();
    const deleteElemName = e.target.parentNode.firstChild.data;
    const { contacts } = this.state;
    contacts.forEach((e, i) => {
      if (e.name === deleteElemName) this.setState(contacts.splice(i, 1));
    });
  };
  addContacts = e => {
    e.preventDefault();
    const { name, contacts, number } = this.state;
    const contact = {
      name: name,
      id: nanoid(),
      number,
    };
    contacts.some(({ name }) => name === contact.name)
      ? alert(` is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };
  setFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterContancts = e => {
    const { contacts, filter } = this.state;
    return contacts.filter(e =>
      e.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  render() {
    const { name, number, filter } = this.state;
    return (
      <>
        <ContactForm
          name={name}
          number={number}
          addContacts={this.addContacts}
          addFormNameTel={this.addFormNameTel}
        ></ContactForm>
        <ContactListFilter
          setFilter={this.setFilter}
          filter={filter}
        ></ContactListFilter>
        <ContactList
          contacts={this.filterContancts()}
          deleteContact={this.deleteContact}
        ></ContactList>
      </>
    );
  }
}
export default App;
