const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db("finalProject").collection("autoSearch");

const SALT_ROUNDS = +process.env.SALT_ROUNDS;

let hieghstId = 3;

const list = [
    { first_name: 'Jesse', last_name: 'Simmons', date: '2016/10/15 13:43:27', gender: 'Male' },
    { first_name: 'John', last_name: 'Jacobs', date: '2016/12/15 06:00:53', gender: 'Male' },
    { first_name: 'Tina', last_name: 'Gilbert', date: '2016/04/26 06:26:28', gender: 'Female' },
    { first_name: 'Clarence', last_name: 'Flores', date: '2016/04/10 10:28:46', gender: 'Male' },
    { first_name: 'Anne', last_name: 'Lee', date: '2016/12/06 14:38:38', gender: 'Female' },
    { first_name: 'Sara', last_name: 'Armstrong', date: '2016/09/23 18:50:04', gender: 'Female' },
    { first_name: 'Anthony', last_name: 'Webb', date: '2016/08/30 23:49:38', gender: 'Male' },
    { first_name: 'Andrew', last_name: 'Greene', date: '2016/11/20 14:57:47', gender: 'Male' },
    { first_name: 'Russell', last_name: 'White', date: '2016/07/13 09:29:49', gender: 'Male' },
    { first_name: 'Lori', last_name: 'Hunter', date: '2016/12/09 01:44:05', gender: 'Female' },
    { first_name: 'Ronald', last_name: 'Wood', date: '2016/12/04 02:23:48', gender: 'Male' },
    { first_name: 'Michael', last_name: 'Harper', date: '2016/07/27 13:28:15', gender: 'Male' },
    { first_name: 'George', last_name: 'Dunn', date: '2017/03/07 12:26:52', gender: 'Male' },
    { first_name: 'Eric', last_name: 'Rogers', date: '2016/06/07 05:41:52', gender: 'Male' },
    { first_name: 'Juan', last_name: 'Meyer', date: '2017/02/01 04:56:34', gender: 'Male' },
    { first_name: 'Silvia', last_name: 'Rosa', date: '2017/01/26 11:50:04', gender: 'Female' },
    { first_name: 'Lori', last_name: 'Cunningham', date: '2016/05/01 10:00:56', gender: 'Female' },
    { first_name: 'Charles', last_name: 'Graham', date: '2016/05/31 06:43:30', gender: 'Male' },
    { first_name: 'Henry', last_name: 'Morrison', date: '2016/09/27 16:15:44', gender: 'Male' },
    { first_name: 'Albert', last_name: 'Mendoza', date: '2016/08/08 05:29:24', gender: 'Male' },
    { first_name: 'Ruby', last_name: 'Snyder', date: '2017/04/01 12:04:39', gender: 'Female' },
    { first_name: 'Jesse', last_name: 'Warren', date: '2016/08/20 01:36:38', gender: 'Male' },
    { first_name: 'Carlos', last_name: 'Ferguson', date: '2016/05/31 10:40:29', gender: 'Male' },
    { first_name: 'Melissa', last_name: 'Peters', date: '2016/07/23 00:41:54', gender: 'Female' },
    { first_name: 'Arthur', last_name: 'Garza', date: '2017/03/11 14:11:37', gender: 'Male' },
    { first_name: 'Joe', last_name: 'Berry', date: '2016/07/09 15:16:56', gender: 'Male' },
    { first_name: 'Joseph', last_name: 'Bishop', date: '2016/10/04 19:44:54', gender: 'Male' },
    { first_name: 'Sarah', last_name: 'Harper', date: '2016/09/23 05:09:11', gender: 'Female' },
    { first_name: 'Christopher', last_name: 'Fuller', date: '2016/04/12 00:05:35', gender: 'Male' },
    { first_name: 'Alan', last_name: 'Mendoza', date: '2016/04/22 10:48:02', gender: 'Male' },
    { first_name: 'James', last_name: 'Davis', date: '2017/01/16 15:17:03', gender: 'Male' },
    { first_name: 'Scott', last_name: 'Welch', date: '2016/10/04 23:31:51', gender: 'Male' },
    { first_name: 'Mildred', last_name: 'Myers', date: '2016/11/23 13:46:18', gender: 'Female' },
    { first_name: 'Victor', last_name: 'Martinez', date: '2016/04/06 17:05:07', gender: 'Male' },
    { first_name: 'Susan', last_name: 'Medina', date: '2016/12/09 10:33:37', gender: 'Female' },
    { first_name: 'Judy', last_name: 'Long', date: '2016/07/26 16:19:04', gender: 'Female' },
    { first_name: 'Joan', last_name: 'Myers', date: '2016/09/22 04:55:54', gender: 'Female' },
    { first_name: 'Rachel', last_name: 'Gonzales', date: '2016/07/15 13:56:38', gender: 'Female' },
    { first_name: 'Roger', last_name: 'Hunt', date: '2016/08/14 10:43:11', gender: 'Male' },
    { first_name: 'Dorothy', last_name: 'Howard', date: '2016/06/19 05:34:49', gender: 'Female' },
    { first_name: 'Eugene', last_name: 'Lynch', date: '2016/12/24 08:19:24', gender: 'Male' },
    { first_name: 'Kathy', last_name: 'Webb', date: '2017/04/01 21:09:05', gender: 'Female' },
    { first_name: 'Antonio', last_name: 'White', date: '2017/02/10 06:51:20', gender: 'Male' },
    { first_name: 'Louis', last_name: 'Spencer', date: '2016/10/08 02:20:22', gender: 'Male' },
    { first_name: 'Andrea', last_name: 'Marshall', date: '2016/09/04 10:59:57', gender: 'Female' },
    { first_name: 'Eugene', last_name: 'Sims', date: '2017/03/15 06:39:48', gender: 'Male' },
    { first_name: 'Mildred', last_name: 'Gibson', date: '2016/04/18 06:43:54', gender: 'Female' },
    { first_name: 'Joan', last_name: 'Arnold', date: '2016/12/16 04:52:23', gender: 'Female' },
    { first_name: 'Jesse', last_name: 'Schmidt', date: '2016/06/11 02:44:33', gender: 'Male' },
    { first_name: 'David', last_name: 'Frazier', date: '2017/02/15 21:46:30', gender: 'Male' },
    { first_name: 'Nicholas', last_name: 'Howell', date: '2016/11/01 15:08:31', gender: 'Male' },
    { first_name: 'Douglas', last_name: 'Chapman', date: '2017/02/08 03:33:24', gender: 'Male' },
    { first_name: 'Bruce', last_name: 'Simmons', date: '2016/07/14 12:11:17', gender: 'Male' },
    { first_name: 'Antonio', last_name: 'George', date: '2016/11/07 19:12:55', gender: 'Male' },
    { first_name: 'Chris', last_name: 'Marshall', date: '2016/07/03 12:11:45', gender: 'Male' },
    { first_name: 'Ashley', last_name: 'Hudson', date: '2016/10/14 21:08:05', gender: 'Female' },
    { first_name: 'Alan', last_name: 'Edwards', date: '2017/03/22 21:10:25', gender: 'Male' },
    { first_name: 'George', last_name: 'Clark', date: '2016/04/28 03:15:05', gender: 'Male' },
    { first_name: 'Frank', last_name: 'Porter', date: '2016/09/08 00:48:14', gender: 'Male' },
    { first_name: 'Christopher', last_name: 'Palmer', date: '2016/05/24 08:58:12', gender: 'Male' }
];

const seed = () => {
    return collection.insertMany(list);
}

async function get(id) {
    const user = await collection.findOne({ _id: new ObjectId(id) });
    if (!user) {
        throw { statusCode: 404, message: 'User not found' };
    }
    return { ...user, password: undefined };
}

module.exports = {
    collection,
    seed,
    async getList(string) {
        const users = await collection.find({
            $or: [{ first_name: { $regex: string, $options: 'i' } },
            { last_name: { $regex: string, $options: 'i' } }
            ]
        }).toArray();

        return users.map(x => ({ ...x, password: undefined }));
    }
}
module.exports.get = get;