import { Router } from 'express';
import {registerSuperAdmin} from '../controllers/SuperAdmin.controller.js';

const router = Router();

router.post('/register', registerSuperAdmin);

export default router;