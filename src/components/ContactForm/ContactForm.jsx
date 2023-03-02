import React from 'react';
import css from './ContactForm.module.css'


const INITIAL_STATE = {
  name: '',
  number: '',
};
export default class ContactForm extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  onFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const contactName = this.state.name;
    const contactNumber = this.state.number;
    this.props.onSubmit(contactName, contactNumber);
    e.target.name.value = '';
    e.target.number.value = '';

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit} onChange={this.onFormChange} className={css.form}>
        <label htmlFor="name" className={css.label}>Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="tel" className={css.label}>Phone number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.add_btn}>Add contact</button>
      </form>
    );
  }
}