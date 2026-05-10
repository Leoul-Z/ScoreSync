const BASE_URL = "https://v3.football.api-sports.io/fixtures?date=2026-05-10";
const API_KEY= "2566bb343c5002defaecbfa14a6a7544";
const NEWS_API_KEY="a91b7d380a054d38baa653e40828a343";

export const getFixtures = async () => {
  
    const fixture = await fetch(`${BASE_URL}`, {
      headers: {
        "x-apisports-key": API_KEY      }
    });

    
    const data = await fixture.json();
  
    return data.response || [];
};

export const getNews = async () => {

  const news = await fetch(
  `https://newsapi.org/v2/everything?q=football&language=en&apiKey=${NEWS_API_KEY}`);

  const data = await news.json();
  return data.articles || data.data || [];


};

