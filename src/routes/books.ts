import {Router, Request, Response} from 'express';
import {bookController} from '../controllers/bookControllers'

const router:Router = Router();

router.get('/', bookController.indexBook);

router.get('/add', bookController.renderBook);

router.post('/add',bookController.saveBook)




export default router;