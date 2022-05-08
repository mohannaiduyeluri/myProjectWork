const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db("finalProject").collection("contactUs");

const SALT_ROUNDS = +process.env.SALT_ROUNDS;

async function addContactUs(contact){
    console.log("submit got called  5, server",contact);
    await collection.insertOne(contact);
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

module.exports = {
    collection, 
    addContactUs,
	fromToken
}