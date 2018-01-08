import { ActionCreator, Reducer } from 'redux';
import { AddTodoAction, CompleteTodoAction, TodoStore, TodoAction } from '../@types/index';

const ADD_TODO: string = 'app/todos/ADD';
const COMPLETE_TODO: string = 'app/todos/COMPLETE';

export const addTodo: ActionCreator<AddTodoAction> = (label: string) => ({
  type: ADD_TODO,
  label
});

export const completeTodo: ActionCreator<CompleteTodoAction> = (id: number) => ({
  type: COMPLETE_TODO,
  id
});

const initStore: TodoStore = {
  list: [
    {
      id: 1,
      label: 'uno',
      complete: false
    },
    {
      id: 2,
      label: 'duos',
      complete: false
    }
  ]
};

export const todoReducer: Reducer<TodoStore> = (store: TodoStore = initStore, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        list: [
          ...store.list,
          {
            id: store.list[store.list.length - 1].id + 1,
            label: action.label,
            complete: false
          }
        ]
      };
    
    case COMPLETE_TODO:
      const todoIndex = store.list.findIndex((todo) => todo.id === action.type);
      return {
        list: [
          ...store.list.slice(0, todoIndex),
          Object.assign({}, store.list[todoIndex], { complete: true }),
          ...store.list.slice(todoIndex + 1)
        ]
      };
    
    default:
      return store;
  }
};
