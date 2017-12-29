import * as express from 'express';
import { default as server } from './server/index';

const app = express();

// GraphiQL, a visual editor for queries
app.use('/graphql', server);

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
