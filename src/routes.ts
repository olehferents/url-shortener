import { Router } from 'express';
import URLRoutes from "./routes/URL.routes";

const routes = Router();

routes.use('/', URLRoutes);

export default routes
