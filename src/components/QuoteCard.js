import React from 'react';
import {connect} from 'react-redux'
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'
import {Component} from 'react'

class QuoteCard extends Component {
	handleUpvote = () => {
		
		this.props.upvoteQuote(this.props.quote.quoteId)
	}
	render(){
		return (
			<div>
				<div className="card card-inverse card-success card-primary mb-3 text-center">
					<div className="card-block">
						<blockquote className="card-blockquote">
							<p>{this.props.quote.content}</p>
							<footer>- author <cite title="Source Title">{this.props.quote.author}</cite></footer>
						</blockquote>
					</div>
					<div className="float-right">
						<div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
							<button
								onClick={() => this.handleUpvote()}
								type="button"
								className="btn btn-primary"
							>
								Upvote
							</button>
							<button
								type="button"
								className="btn btn-secondary"
							>
								Downvote
							</button>
							<button
								type="button"
								className="btn btn-danger"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div>Votes: {this.props.quote.votes}</div>
					</div>
				</div>
			</div>
		);
	}
	
}
const mapDispatchToProps = dispatch => {
	return {
		upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
		downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId)),
		removeQuote: quoteId => dispatch(removeQuote(quoteId))
	}
}

export default connect(null, mapDispatchToProps)(QuoteCard);
