import { Router } from 'express';
import statusController from '../controllers/statusController';

const router = new Router();

/* GET health check. */
router.get('/', statusController.get);

module.exports = router;
