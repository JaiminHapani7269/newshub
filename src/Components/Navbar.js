import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Navbar extends Component {

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src='https://cdn-icons-png.flaticon.com/128/11510/11510769.png' height="35" alt='logo'></img>&nbsp;NEWS Hub</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                </li>
              </ul>
              <span className="navbar-text">
                Stay Upadted with latest NEWS...!
              </span>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
