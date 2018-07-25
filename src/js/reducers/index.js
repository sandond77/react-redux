import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_ARTICLE:
			// state.articles.push(action.payload); 
			//this is a bad reducer because it our state is not immutable; we are adding a state object
			return { ...state, articles: state.articles.concat(action.payload)};
			// we are using ... (the es6 spread function) and concat() to create a new array; 
			// the spread function ... will save us some time by taking all elements in the state array;
			// concat inheritly creates a new array
		default:
			return state;
	}
}
//rootReducer here is the reducer; it is taking 2 parameter - state and action
//we are setting state equal to the constant initialState

export default rootReducer;