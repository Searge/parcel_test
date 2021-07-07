<<<<<<< HEAD
export default function validatePassword(password) {
  return true;
}

=======
import Joi from 'joi';

const passSchema = Joi.string().min(3).max(10);

export default function validatePassword(password) {
  return passSchema.validate(password);
}
>>>>>>> parent of 54e1d81... :truck:
