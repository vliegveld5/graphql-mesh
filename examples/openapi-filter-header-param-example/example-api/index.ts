import { createServer } from 'http';
import { router } from './router';

createServer(router).listen(3000, () => {
  console.log(`🚀Example API ready at port 3000`);
});
