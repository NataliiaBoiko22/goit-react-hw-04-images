import React, { useState } from 'react';
import styles from './searchbar.module.css';
import Notiflix from 'notiflix';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const formChangeInput = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (search.trim() === '') {
      Notiflix.Notify.info('Please enter your request in the input field');
      return;
    }
    onSubmit(search);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={formSubmit}>
        <input
          onChange={formChangeInput}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
        />
        <button type="submit" className={styles.SearchFormButton}>
          &#x1F50D;
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;

