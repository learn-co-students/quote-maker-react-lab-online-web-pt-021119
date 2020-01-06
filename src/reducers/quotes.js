export default (state = [], action) => {
  // console.log(state)
  switch(action.type){
    case 'ADD_QUOTE':
      return[...state, action.quote ]
    case 'REMOVE_QUOTE':
        return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if(quote.id === action.quoteId){
          quote.votes = quote.votes + 1;
          return quote
        }else{
          return quote}
        });
    case 'DOWNVOTE_QUOTE':
      return state.map(quote => {
        if(quote.votes !== 0){
          quote.votes = quote.votes - 1;
          return quote
        }else{
          return quote

        }
      });
    
  }
  return state;
}
