import React from 'react';
import { nanoid } from 'nanoid';
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
  addContacts = e => {
    e.preventDefault();
    const { name, contacts, number } = this.state;
    const contact = {
      name: name,
      id: nanoid(),
      number,
    };
    console.log(contact);
    this.setState([contacts.push(contact)]);
  };
  addContacts = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }
  filterContancts = () => {
    const {contacts,filter} = this.state
  this.setState({contacts: contacts.filter(e =>
    e.name.toLowerCase().includes(filter.toLocaleLowerCase())
  )})
   
  }
  render() {
    const { contacts, name, number,filter } = this.state;
    return (
      <>
        <h1>PhoneBook</h1>
        <form onSubmit={this.addContacts}>
          <label>
            Name
            <input
              onChange={this.addFormNameTel}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          Tel:
          <label>
            <input
              onChange={this.addFormNameTel}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
          onChange={this.filterContancts}
          type="text" name="filter"
          value={filter}
           />
        </label>
        <ul>
          {contacts.map(e => {
            return (
              <li key={nanoid()}>
                {e.name} : {e.number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default App;
