import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';
import { fetchImage } from '../../Api/api.js';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';

const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (search !== '') {
      setIsLoading(true);
      setCards([]);
      setPage(1);

      fetchSearch(search, 1)
        .then((res) => setCards(res))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    }
  }, [search]);

  const fetchSearch = async (value, page) => {
    try {
      const res = await fetchImage(value, page);
      return res;
    } catch (err) {
      setError(err);
    }
  };

  const clickButton = () => {
    setIsLoading(true);
    setPage(page + 1);

    fetchSearch(search, page + 1)
      .then((res) => setCards([...cards, ...res]))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  const modalShow = (url) => {
    setShowModal(true);
    setLargeImageURL(url);
  };

  const modalClose = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={setSearch} />
      <ImageGallery cards={cards} onShow={modalShow} />
      {isLoading && <Loader />}
      {cards.length > 0 && !isLoading && <Button onClick={clickButton} />}
      {showModal && <Modal onClose={modalClose} image={largeImageURL} />}
    </div>
  );
};

export default App;






