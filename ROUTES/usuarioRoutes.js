import express from 'express';
import { listarUsuarios } from '../CONTROLLERS/usuarioController.js';

const router = express.Router();

router.get('/', listarUsuarios);

export default router;