import * as express from 'express';
import server from './server/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('build/assets'));
app.use('/graphql', server);

app.listen(PORT, () => console.log(`App is running http://localhost:${PORT}/!`));
