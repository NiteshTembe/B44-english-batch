import React from "react";

export const Home = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/home">Home Page</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="text-center mt-5">
                <h1>Welcome To Home Page</h1>
                <p className="lead">You Have successfully logged in...</p>
            </div>
        </div>
        </div>
    )
}