import React, { Component } from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <div className={css.inputContainer}>
          <input
            value={this.state.name}
            placeholder=" "
            className={css.input}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.placeholder} htmlFor="name">
            Please enter name
          </label>
        </div>
        <div className={css.inputContainer}>
          <input
            value={this.state.number}
            placeholder=" "
            className={css.input}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <label className={css.placeholder} htmlFor="number">
            Please enter number
          </label>
        </div>
        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
