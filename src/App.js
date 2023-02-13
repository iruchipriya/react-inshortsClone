import './App.css';
import NavbarInshorts from './components/navbar/navbarInshorts';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsContent from './components/newsContent/newsContent';
import apiKey from './data/config';
import Footer from './components/footer/footer';

function App() {

  const [category, setCategory] = useState('general');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [loadMore, setLoadMore] = useState(20);


  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://${proxyUrl}newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${loadMore}`);
      console.log(news.data);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch(error){
      console.log(error);
    }
  };

useEffect(() => {
  newsApi();
}, [newsResults, category, loadMore])

  return (
    <div className="App">
      <NavbarInshorts setCategory={setCategory}/>
      <NewsContent 
      newsArray={newsArray} 
      loadMore={loadMore}
      setLoadMore={setLoadMore}
      newsResults={newsResults}/>
      <Footer/>
    </div>
  );
}

export default App;
