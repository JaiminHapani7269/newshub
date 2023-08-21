import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, source, author, date } = this.props;
    return (
      <>
        <div className="card my-3 " >
          <img className="card-img-top" src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvYkj9K_l-G3pzCitwkGf4WoUaRuhagAA3Q&usqp=CAU" : imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">Published at: {date}</small></p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-dark">Read More</a>
            <div className="card-footer my-3">
              <small className="text-muted">Source: <strong>{source}</strong> </small><br></br>
              <small className="text-muted">Author: <strong>{author}</strong> </small>
            </div>
          </div>
        </div >
      </>
    )
  }
}

export default NewsItem
