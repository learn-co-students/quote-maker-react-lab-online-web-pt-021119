// TODO: Create action creators as defined in tests
import uuid from 'uuid'

export function addQuote(quote){
	const quoteId = uuid()
	quote.quoteId = quoteId
	quote.votes = 0
	return {type: 'ADD_QUOTE', quote}
}

export function removeQuote(quoteId){
	return {type: 'REMOVE_QUOTE', quoteId}
}

export function upvoteQuote(quoteId){
	return {type: 'UPVOTE_QUOTE', quoteId}
}

export function downvoteQuote(quoteId){
	return {type: 'DOWNVOTE_QUOTE', quoteId}
}