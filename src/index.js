import makeid from './js/make-id';
import validatePassword from './js/validate-password';
import {
  fetchAllUsers,
  fetchUserById,
  updateUserById as updateUser,
} from './js/api-service';

document.getElementById('random-text').innerHTML = makeid(16);
console.log(validatePassword('password'));
console.log(fetchAllUsers, fetchUserById, updateUser);
