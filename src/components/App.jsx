import React from "react";
import css from './App.module.css'
import { nanoid } from "nanoid";
import ContactsList from "./ContactsList/ContactsList";
import ContactForm  from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

const LS_KEY = 'ls contacts';



export class App extends React.Component{
  state = {
    contacts: [],
    filter: '',
  };
 
  componentDidUpdate(p, prevState){
    if(prevState.contacts.length !== this.state.contacts.length){
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts))
    }


  }
  
  componentDidMount() {
   
    const savedContacts = localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
        this.setState({ contacts: parsedContacts });
      }
  }

  addContact = (contactName, contactNumber) => {
    const checkName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (checkName) {
      alert(`${contactName} is already in your contacts.`);
      return;
    } else {
      const newContact = {
        id: nanoid(),
        name: contactName,
        number: contactNumber,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  onInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {
    const normalizedValue = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
    return (
      <div className={css.main_container}>
        <h1 className={css.phonebook_title}> Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={css.contants_title}> Contacts</h2>
        <Filter onChange={this.onInputChange} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}