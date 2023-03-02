import propTypes from 'prop-types';
import css from './Filter.module.css'

export default function Filter({ onChange }) {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input className={css.filter_input}  onChange={onChange} />
      </>
    );
  };
  Filter.propTypes = {
    onChange: propTypes.func.isRequired,
  };