import SuperAdmin from '../models/SuperAdmin.js';
import { publishUserEvent } from '../events/publisher.js';

export const registerSuperAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // In production: const hashedPassword = await bcrypt.hash(password, 10);
    const newSuperAdmin = new SuperAdmin({ username, password });
    await newSuperAdmin.save();

    // // Publish event without sensitive data
    // await publishUserEvent('USER_REGISTERED', {
    //   userId: SuperAdmin._id,
    //   email: SuperAdmin.email,
    //   fullName: SuperAdmin.fullName
    // });

    res.status(201).json({
      status: 'success',
      data: { SuperAdminId: newSuperAdmin._id }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};