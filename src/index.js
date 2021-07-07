import makeid from './js/make-id';
import validatePassword from './js/validate-password';
import {
<<<<<<< HEAD
=======
  addUser,
>>>>>>> parent of 54e1d81... :truck:
  fetchAllUsers,
  fetchUserById,
  updateUserById as updateUser,
} from './js/api-service';

<<<<<<< HEAD
document.getElementById('random-text').innerHTML = makeid(16);
console.log(validatePassword('password'));
console.log(fetchAllUsers, fetchUserById, updateUser);
=======
addUser('Mango')

document.getElementById('random-text').innerHTML = makeid(16);
console.log(fetchAllUsers, fetchUserById, updateUser);
console.log(validatePassword('password'));


>>>>>>> parent of 54e1d81... :truck:
