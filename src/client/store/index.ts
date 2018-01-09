import { createStore, combineReducers, Reducer, ReducersMapObject } from 'redux';
import { todo } from './todo';

import { TodoStore } from '../@types/index';

export interface AppStore extends ReducersMapObject {
  todo: Reducer<TodoStore>
}

export default createStore(combineReducers({todo: todo} as AppStore));