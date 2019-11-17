export default (state = [], action) => {
  let idx;

  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
    return state.map(quote => {
      if(quote.id === action.id){
        quote.votes = quote.votes + 1;
        return quote;
      }else{
        return quote;
      }
    });

    case 'DOWNVOTE_QUOTE':
    return state.map(quote => {
      if(quote.id === action.id){
        quote.votes = quote.votes - 1;
        return quote;
      }else{
        return quote;
      }
    });

    default:
      return state;
  }
}
