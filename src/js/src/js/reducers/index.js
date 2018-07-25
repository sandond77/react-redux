const initialState = {
  articles: []
};



const rootReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_ARTICLE:
			state.articles.push(action.payload);
			return state;
		default:
			return state;
	}
}
//rootReducer here is the reducer; it is taking 2 parameter - state and action
//we are setting state equal to the constant initialState

export default rootReducer;