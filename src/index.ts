import * as express from 'express';
import { default as server} from './server/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('build/assets'));
app.use('/graphql', server);

// Start the server
app.listen(PORT, () => console.log(`App is running http://localhost:${PORT}/!`));
