import { useEffect, useState } from "react"
import axios from "axios";

export default function NewsFeed() {

  const [articles, setArticles] = useState(null)

 useEffect(() => {

  const options = {
    method: 'GET',
    url: 'https://crytocurrency-live.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': '81e2855377msh7438a27dbf05d71p140be7jsnc77660bda295',
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

  return (
    <div className="news-feed">
      Newsfeed
    </div>
  )
  
};
