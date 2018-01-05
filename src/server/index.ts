import * as graphqlHTTP from 'express-graphql';
import { buildSchema, GraphQLTypeResolver } from 'graphql';
import { ToDo } from '../project';

const todos:ToDo[] = [
  {
    id: 1,
    label: 'walk with dog',
    complete: false
  },
  {
    id: 2,
    label: 'got to bed children',
    complete: false
  }
];

const rootValue:Object = {
  todos: ({ id = null, label = null, complete = null }) => todos.filter((todo) =>
    (id === null || todo.id === id) &&
      (label === null || todo.label.indexOf(label) >= 0) &&
      (complete === null || todo.complete === complete)),
  addTodo: ({label = null}) => {
    todos.push({
      id: todos[todos.length - 1].id + 1,
      label,
      complete: true
    });
    return todos[todos.length - 1];
  }
};

const schema = buildSchema(`
  type Todo {
    id: Int,
    label: String,
    complete: Boolean
  }
  type Query {
    todos(id: Int, label: String, complete: Boolean): [Todo]
  }
  type Mutation {
    addTodo(label: String): Todo
  }
`);

export default graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
});