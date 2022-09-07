import { useEffect, useState } from "react"
import axios from "axios";

export default function NewsFeed() {

  const [articles, setArticles] = useState(null)

 useEffect(() => {

  const options = {
    method: 'GET',
    url: 'https://crytocurrency-live.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'crytocurrency-live.p.rapidapi.com'
    }
  };
  
   axios.request(options).then((response) => {
     console.log(response.data);
     setArticles(response.data);
   }).catch((error) => {
     console.error(error);
   });
 
   return () => {
     
   }
 }, [])
 
  console.log(articles)

  const firstSevenArtices = articles?.slice(0, 7)

  return (
    <div className="news-feed">
      <h2>News feed</h2>
      {firstSevenArtices?.map((article, _index) => (
        <div key={_index}>
         <a href={article.url}> <p>{article.title}</p></a></div>))};
      
    </div>
  )
  
};
