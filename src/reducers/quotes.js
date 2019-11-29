export default (state = [], action) => {
	switch (action.type){
		case 'ADD_QUOTE':
			return state = [...state, action.quote]
		case 'REMOVE_QUOTE':
			return state = state.filter(quote => quote.quoteId !== action.quoteId)
		case 'UPVOTE_QUOTE':
			state.filter(quote => quote.quoteId === action.quoteId)[0].votes += 1
			return state.slice()
		case 'DOWNVOTE_QUOTE':
			state.filter(quote => quote.quoteId === action.quoteId)[0].votes -= 1 
			return state
		default:
			return state;
	}

}
