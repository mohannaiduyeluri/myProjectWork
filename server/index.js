require('dotenv').config();
const express = require('express');
const history = require('connect-history-api-fallback');
const { join } = require('path');

const userModel = require('./models/user');
const usersController = require('./controllers/users');
const tasksController = require('./controllers/tasks');
const contactController = require('./controllers/contactUs');

const { requireAuth } = require('./models/auth');

const app = express()
const port = process.env.PORT || 3000;

const dist = join(__dirname, '../client/dist');
const index = join(dist, '/index.html');

const static = express.static(dist);

app
	.use(static)
	.use(function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
			next();
	})
	.use(express.json())
	.use((req, res, next) => {
			const auth = req.headers.authorization;
			if(auth){
					const token = auth.split(' ')[1];
					userModel.fromToken(token)
					.then(user => {
							req.user = user;
							next();
					}).catch(next);
			}else{
					next();
			}
	})
	.get('/api/', (req, res) => {
			res.send('You are at the root of the API.');
	})
	.use('/api/users', usersController)
	.use('/api/tasks', tasksController)
	.use('/api/contact', contactController)
	.use((err, req, res, next) => {
			console.error(err);
			res .status(err.statusCode || 500)
					.send({ errors: [ err.message ?? 'Internal server error' ] });
	})
	.use(history({index}))
	.listen(port, () => {
		console.log(`Listening at http://localhost:${port}`)
	})


