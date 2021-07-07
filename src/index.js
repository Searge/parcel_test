import makeid from './js/make-id';
import validatePassword from './js/validate-password';
import {
  addUser,
  fetchAllUsers,
  fetchUserById,
  updateUserById as updateUser,
} from './js/api-service';

addUser('Mango')

document.getElementById('random-text').innerHTML = makeid(16);
console.log(fetchAllUsers, fetchUserById, updateUser);
console.log(validatePassword('password'));


