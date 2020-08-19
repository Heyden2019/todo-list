import express from 'express';
import routes from './routes/routes';
import os from "os"
import cors from "cors";
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 9000;
app.set('port', port);
const db = require('./routes/queries')

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routes(app, db);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.listen(port, () => {
  console.log('App server running at http://' + os.hostname() + ':' + port);
});

