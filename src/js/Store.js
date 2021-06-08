import { createStore } from 'redux'
import Todoreducer from './reducer/Todoreducer'
const Store = createStore(Todoreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default Store;