import '../css/News.css'
import { useEffect, useState } from "react";
import { getNews } from "../services/api";

function News() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadNews = async () => {
            try {
                const news = await getNews();
                setArticles(news);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        loadNews();

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return <>
        <h1 className="news-title">Football News</h1>
        <div className='news'>
            {articles.slice(0,10).map((article, index) => (
                <div key={index} className='article'>
                    

                    <h2 className='article-title'>{article.title}</h2>

                    <p className='article-description'>{article.description}</p>

                    <img
                        src={article.urlToImage}
                        alt={article.title}
                        className='article-img'
                    />

                    <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Read More
                    </a>
                </div>
            ))}
        </div>
    </>
}

export default News