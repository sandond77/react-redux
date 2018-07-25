import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;

// store.subscribe(() => console.log('Look ma, redux!!'));

// store.dispatch( addArticle ({
// 	name: 'React Redux Tutorial for Noobs',
// 	id: 1
// 	})
// )