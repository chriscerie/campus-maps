import express from 'express';
import auth from './auth';
import users from './users';
import locations from './locations';
import reviews from './reviews';
import '../config/passport';

const router = express.Router();

router.use('/', auth);
router.use('/', users);
router.use('/', locations);
router.use('/', reviews);

export default router;
