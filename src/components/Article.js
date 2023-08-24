import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default () => {

    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    let { id } = useParams();
    let { search } = useSearchParams();

    useEffect(() => {
        fetchArticle();
    }, [id]);

    const fetchArticle = () => {
        setLoading(true);
        fetch(`http://localhost:9000/articles/${id}`)
            .then(response => response.json())
            .then(article => {
                setArticle(article);
                setLoading(false);
            });
    }

    return (
        <div className="row">
            <div className="col-8 mx-auto mt-4">
                {!loading ? (
                    <div className="row text-center">
                        <h3>
                            {article?.title} <br />
                            <small className="text-body-secondary">{article?.content}</small> <br />
                            <small className="text-body-secondary">{article?.viewsCount}</small> <br />
                        </h3>
                    </div>
                ) : (
                    <div className="text-center mt-5">
                        <div className="spinner-border text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
}