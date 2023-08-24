import { Link } from "react-router-dom";

export default ({ id, title, content, viewsCount }) => {
    return (
        <div className="card" key={id}>
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <h5 className="card-title">{content}</h5>
                <p className="card-text">{content}</p>
                <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">Views: {viewsCount}</footer>
                </blockquote>
                <Link to={`/articles/${id}`} className="btn btn-primary">Check details</Link>
            </div>
        </div>
    );
}