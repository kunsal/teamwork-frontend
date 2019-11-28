import React, { Component } from 'react';
import { getFeed } from '../services/teamwork-api';

class Feeds extends Component {
  state = { 
    feed: {}
   }

  async componentDidMount() {
    const feed = await getFeed();
    if (feed.status === 'success') {
      this.setState({ feed: feed.data })
    }
    console.log(feed);
  }

  render() { 
    return ( 
      <div className="row">
        {this.state.feed.length > 0 ? 
          this.state.feed.map(feed => (
            <div className="col-md-4">
              <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                <h5 className="card-title">{feed.title}</h5>
                <p className="card-text">{feed.article ? feed.article : (<img src={feed.url} width="100%" alt="" />)}</p>
                <a href={`feed/${feed.id}`} className="btn btn-primary" onClick="">View</a>
              </div>
              </div>
            </div>
          ))
          : 
          'Loading......................'
        }
      </div>
     );
  }
}
 
export default Feeds;