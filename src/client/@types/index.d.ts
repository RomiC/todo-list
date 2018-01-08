import { Action } from 'redux';

interface TodoAction extends Action {
  id?: number,
  label?: string
}

interface AddTodoAction extends TodoAction {
  label: string
}

interface CompleteTodoAction extends TodoAction {
  id: number
}

interface TodoStore {
  list: Todo[]
}
