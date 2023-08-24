import { useRouteError } from "react-router-dom";

export default () => {
    const error = useRouteError();
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto text-center">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <div className="alert alert-danger" role="alert">
                        <i>{error.statusText || error.message}</i>
                    </div>
                </div>
            </div>
        </div>
    );
}