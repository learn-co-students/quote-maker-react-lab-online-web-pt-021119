import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'

class Quotes extends Component {

	

  render() {
		
		const renderCards = this.props.quotes.map(quote => <QuoteCard quote={quote}/>)
		
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {renderCards}
            </div>
          </div>
        </div>
      </div>
    );
	}
}

const mapStateToProps = state => {
	return state
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
// 		downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId)),
// 		removeQuote: quoteId => dispatch(removeQuote(quoteId))
// 	}
// }


// //add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
