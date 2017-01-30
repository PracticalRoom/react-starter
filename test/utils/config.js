import {config} from 'dotenv';
import {join} from 'path';

// Load test config
config({
  path: join(__dirname, '..', '.env.test')
});
