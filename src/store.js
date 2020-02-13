import  {createStore ,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import users from './store/users.reducer';
import logger from 'redux-logger';

export default createStore(
    combineReducers({users}),
    applyMiddleware(thunk,logger)
)