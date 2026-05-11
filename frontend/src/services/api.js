const BASE_URL = "https://v3.football.api-sports.io/fixtures";
const API_KEY= "a4bf053de3042f3258640f42218ad9b5";
const NEWS_API_KEY="a91b7d380a054d38baa653e40828a343";

export const getFixtures = async () => {
   const formattedDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  
    const fixture = await fetch(`${BASE_URL}?date=${formattedDate}`, {
      headers: {
        "x-apisports-key": API_KEY      }
    });

    
    const data = await fixture.json();
  
    return data.response || [];
};

export const getFixturesDate = async (date) => {
   //const formattedDate = date.toISOString().split("T")[0]; 
  
    const fixture = await fetch(`${BASE_URL}?season2026&date=${date}`, {
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

