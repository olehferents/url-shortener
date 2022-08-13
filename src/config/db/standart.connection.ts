import mongoose from 'mongoose';
import { dbConnections } from '../config';

const connection = mongoose.connect(dbConnections.mongo.connectionUrl);

export default connection;
