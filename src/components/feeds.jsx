import React, { Component } from 'react';
import { getFeed } from '../services/teamwork-api';
import Loading from './common/loading';
import { connect } from 'react-redux';
import { SAVE_FEED } from '../redux/actions/types'

class Feeds extends Component {
  
  async componentDidMount() {
    const feed = await getFeed();
    if (feed && feed.status === 'success') {
      this.props.saveFeed(feed.data);
      //this.setState({ feed: feed.data })
    }
  }

  render() { 
    return ( 
      <div className="row">
        {this.props.feed.length > 0 ? 
          this.props.feed.map(feed => (
            <div className="col-md-4" key={feed.title}>
              <div className="card" style={{width: '100%'}}>
              <div className="card-body">
                <h5 className="card-title">{feed.title}</h5>
                <p className="card-text">{feed.article ? feed.article.substring(0, 200) + '...' : (<img src={feed.url} width="100%" alt="" />)}</p>
                <a href={`feed/${feed.id}`} className="btn btn-sm btn-primary">Read More</a>
              </div>
              </div>
            </div>
          ))
          : 
          <div style={{ height: '500px' }}>
            <div className="container-fluid h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col col-sm-6">
                  <Loading />
                </div> 
              </div>
            </div>
          </div>
        }
      </div>
     );
  }
}

const mapStateToprops = (state) => {
  return {
    feed: state.feed
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveFeed: (feed) => dispatch({type: SAVE_FEED, feed})
});
 
export default connect(mapStateToprops, mapDispatchToProps)(Feeds);