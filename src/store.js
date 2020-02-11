import  {createStore ,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import users from './store/users.reducer';

export default createStore(
    combineReducers({users}),
    applyMiddleware(thunk)
)