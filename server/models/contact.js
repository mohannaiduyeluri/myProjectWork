const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db("finalProject").collection("contactUs");

const SALT_ROUNDS = +process.env.SALT_ROUNDS;

async function addContactUs(contact) {
    console.log("submit got called  5, server", contact);
    sendEmail(contact.Email, contact.Body);
    await collection.insertOne(contact);
    const result = await collection.find();
    return result;
}

function fromToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
}
function sendEmail(email, message) {
    fetch([
        'https://cdn.jsdelivr.net/momentjs/2.17.1/moment.min.js'
    ]).then(() => {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "mohansandeep.yeluri@gmail.com",
            Password: "Mohan@112",
            To: email,
            From: "mohansandeep.yeluri@gmail.com",
            Subject: "Contact Us",
            Body: message,
        })
            .then(function (message) {
                alert("mail sent successfully")
            });
    })

}
module.exports = {
    collection,
    addContactUs,
    fromToken
}