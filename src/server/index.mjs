import * as dotenv from 'dotenv'
import app from './app.mjs';
import { startSevrer } from '../config/database.mjs';

dotenv.config();

const { PORT, URI } = process.env;
startSevrer(app,PORT, URI);
