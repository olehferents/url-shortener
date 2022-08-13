import { Router } from 'express'
import URLController from "../controllers/URL.controller";
import 'express-async-errors';

const route = Router()

route.post('/shorten', URLController.shortenURL)
route.get('/:urlId', URLController.redirect)

export default route;
