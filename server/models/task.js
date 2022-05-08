const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db("finalProject").collection("tasks");

const SALT_ROUNDS = +process.env.SALT_ROUNDS;

// let hieghstId = 3;

 const list = [
	{
		_id:'1',
		by: 'Mohan',
		date: '04-22-2022',
		done: false,
		title: 'Update NodeJS',
		for: 'Sandeep'
	},
	{
		_id:'2',
		by: 'Sandeep',
		date: '04-28-2022',
		done: false,
		title: 'Update Vue',
		to: 'Mohan'
	},
	{
		_id:'3',
		by: 'Yeluri',
		date: '04-24-2022',
		done: true,
		title: 'Integrate jQuery',
		to: 'Mohan'
	},
	{
		_id:'4',
		by: 'Sunny',
		date: '04-24-2022',
		done: true,
		title: 'Make a demo',
		to: 'Mohan'
	}
];

async function getTasks(){
    const tasks = await collection.find();
    return tasks;
}

async function addTask(task){
    await collection.insertOne(task);
    const result = await collection.find();
	console.log("printing at mongo db response ", result);
    return result;
}

async function updateTask(id, taskOld){
	await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: {done:taskOld.done} },
        { returnDocument: 'after' }
    );
    const result = await collection.find();
    return result;
}

function fromToken(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                reject(err);
            }else{
                resolve(decoded);
            }
        });
    });
}

const seed = () => {
  return collection.insertMany(list);
}

module.exports = {
    collection, 
    seed,
    fromToken,
	addTask,
	updateTask,
    async getList(){
        return (await collection.find().toArray() );
    }
}
// module.exports.get = get;