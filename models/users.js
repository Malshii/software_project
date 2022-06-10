const users = [];

module.exports = {

    getUser : async(email) =>{
        const thisUser = users.find(user => user.email === email);
        return thisUser;
    }

}

function updateUser(user) {
    const thisUserIndex = users.findIndex(local => local.email === user.email);
    users[thisUserIndex] = user;
}

// module.exports = {
//     updateUser,
// }

