import React, { useState, useEffect } from "react";

import Searchbar from "./Searchbar/SearchBar.jsx";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import Loader from "./Loader/Loader.jsx";

import { getImgs } from "./Api/Api.js";

import "./App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(true);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setLoading(true);
    try {
      const newImages = await getImgs(newQuery, 1);
      setImages(
        newImages.map((image) => ({
          ...image,
          alt: image.tags || "Image",
        }))
      );
      setHasMoreImages(true);
    } finally {
      setLoading(false);
    }
  };

  const handleInitialLoad = async () => {
    setLoading(true);
    try {
      const newImages = await getImgs(query, page);
      setImages((prevImages) => [
        ...prevImages,
        ...newImages.map((image) => ({
          ...image,
          alt: image.tags || "Image",
        })),
      ]);
      setHasMoreImages(newImages.length === 12);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!hasMoreImages) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (url) => {
    setLargeImageURL(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setLargeImageURL("");
    setShowModal(false);
  };

  useEffect(() => {
    handleInitialLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const newImages = await getImgs(query, page);
        setImages((prevImages) => [
          ...prevImages,
          ...newImages.map((image) => ({
            ...image,
            alt: image.tags || "Image",
          })),
        ]);
        setHasMoreImages(newImages.length === 12);
      } finally {
        setLoading(false);
      }
    };

    if (page !== 1 || query) {
      fetchData();
    }
  }, [page, query]);

  return (
    <>
      <Searchbar onSubmit={handleSearch} />

      <ImageGallery images={images} onImageClick={handleImageClick} />

      {loading && <Loader />}

      {hasMoreImages && (
        <Button onClick={handleLoadMore} show={hasMoreImages}>
          Load more
        </Button>
      )}

      {showModal && (
        <Modal onClose={handleCloseModal} largeImageURL={largeImageURL} />
      )}
    </>
  );
};

export default App;
