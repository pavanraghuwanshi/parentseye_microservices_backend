//main.route.js file for all the route file in one place 

import { Router } from 'express';
import SuperAdminRoutes from './SuperAdmin.route.js';


const router = Router();

router.use('/SuperAdminRoutes', SuperAdminRoutes);  


export default router;
