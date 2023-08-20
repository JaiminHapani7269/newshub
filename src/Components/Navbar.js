import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">NEWS Hub</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">General</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Health</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Technology</a>
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
