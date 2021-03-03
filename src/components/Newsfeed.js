import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Newsfeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsData: this.props.newsData,
    };
  }

  componentDidMount() {
    const loopLength = this.state.newsData.length;
    for (let i = 0; i < loopLength; i += 1) {
      fetch(this.state.newsData[i].fname)
        .then((res) => res.text())
        .then((newsText) => {
          this.setState((prevState) => {
            const newsDataCopy = prevState.newsData.slice();
            newsDataCopy[i].post = newsText;
            return ({ newsData: newsDataCopy });
          });
        });
    }
  }

  render() {
    return (
      <div className="newsfeed">
        {this.state.newsData.map((newsItem) => {
          if (newsItem.post) {
            return (
              <div key={`${newsItem.title} - ${newsItem.subtitle}`} className="news-item">
                <div className="news-title"> {newsItem.title} </div>
                <div className="news-subtitle"> {newsItem.subtitle} </div>
                <img className="news-img" src={newsItem.img} alt={newsItem.imgAlt} />
                <ReactMarkdown className="news-text" source={newsItem.post} />
              </div>
            );
          } else {
            return (
              <div key={`${newsItem.title} - ${newsItem.subtitle}`} className="news-item">
                <div className="news-title"> {newsItem.title} </div>
                <div className="news-subtitle"> {newsItem.subtitle} </div>
                <div className="news-placeholder"> Loading... </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Newsfeed;
