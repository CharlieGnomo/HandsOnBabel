const mongoose = require('mongoose');

const User = mongoose.model('User', { // El name corresponde con la coleccion.
  id: String,
  name: String,
  description: String,
  url: String,
  statuses_count: Number, // El numero de tweets y Rt del usuario actual
},
);


function getUser(id) {
    return User.findOne({ id: id });
}

function getAllUsers(){
    return User.find({});
}

module.exports = {
  getUser,
  getAllUsers,
}
