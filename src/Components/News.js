import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: '12',
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c55747e773a44633927d4c7dbae37f5a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  hablePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c55747e773a44633927d4c7dbae37f5a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });

  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize)))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c55747e773a44633927d4c7dbae37f5a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }

  render() {

    return (
      <div className='container my-4'>
        <h1 className='h1 text-center'>NewsHub - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((ele) => {
            return <div className="col-md-4" key={ele.url}>
              <NewsItem title={ele.title ? ele.title : ""} description={ele.description ? ele.description : ""} imageUrl={ele.urlToImage} newsUrl={ele.url} source={ele.source.name ? ele.source.name : "Not Declared."} />
            </div>
          })}
        </div>
        <div className="d-flex justify-content-evenly">
          <button style={{ width: "10rem" }} disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.hablePreviousClick}>&larr; Previous</button>
          <button style={{ width: "10rem" }} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}