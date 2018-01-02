import * as express from 'express';
import { default as server } from './server/index';

const app = express();
const PORT = process.env.PORT || 3000;

// GraphiQL, a visual editor for queries
app.use('/graphql', server);

// Start the server
app.listen(PORT, () => console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`));
