import mongoose from 'mongoose';
import config from './../../config/config';

class MongoDB {
  constructor() {
    this.connect();
  }

  private connect(): void {
    const mongoUri: string = config.MONGODB_URI as string;
    mongoose
      .connect(mongoUri)
      .then(() => {
        console.log('🗃️ The connection with MongoDB has been established ✅');
      })
      .catch((error) => {
        console.error('🚩 Error connecting to MongoDB', error);
      });
  }
}

export default MongoDB;