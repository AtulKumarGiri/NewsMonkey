import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imgUrl?"https://gumlet.assettype.com/swarajya%2F2023-03%2F56003ec8-44a7-47ec-8bbc-6d688b030df7%2F2023_DW_asteroid.png?w=1200&auto=format%2Ccompress&ogImage=true":imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className='text-muted'>By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
       
      </div>
    )
  }
}

export default NewsItem
