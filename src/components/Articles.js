import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

export default () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = () => {
        fetch("http://localhost:9000/articles")
            .then(response => response.json())
            .then(articles => setArticles(articles));
    }

    return (
        <div className="row mt-4">
            {articles && articles.map((article, index) => <div className="col-4 mb-3" key={index}> <ArticleCard {...article} /> </div>)}
        </div>
    );
}