import React, { useState, useEffect } from 'react';
import Article from './Article';
import './NewsApp.css';

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // Track loading state

  const loadMoreArticles = async () => {
    if (loading) return; // Return if already loading
    setLoading(true); // Set loading state to true
    const country = 'in'; // Country code for India
    const apiKey = 'e4407c81f905426a80252535f49a722d';
    const pageSize = 10;

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`
    );
    const data = await response.json();
    setArticles(prevArticles => [...prevArticles, ...data.articles]);
    setPage(page + 1);
    setLoading(false); // Reset loading state
  };

  useEffect(() => {
    loadMoreArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Load articles on initial render

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop =
      window.innerHeight + document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.offsetHeight;
    if (scrollTop === scrollHeight) {
      loadMoreArticles();
    }
  };

  return (
    <div className="news-app">
      <h1>News App</h1>
      <div className="mx-auto d-flex mb-3 w-50" role="search">
        {/* Search input code */}
      </div>
      <div className="articles-list">
        {articles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
      <button className="btn btn-dark" onClick={loadMoreArticles} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
}

export default NewsApp;
