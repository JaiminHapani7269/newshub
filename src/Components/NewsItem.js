import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, source } = this.props;
    return (
      <>
        <div className="card my-3 " style={{ width: "20rem" }}>
          <img className="card-img-top" style={{ height: "12rem" }} src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85zKRFCeTLN21TqGeZQ0BgmE2CrqvFJgF1g&usqp=CAU" : imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-secondary">Read More</a>
            <div class="card-footer my-3">
              <small class="text-muted">Source: <strong>{source}</strong> </small>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem
