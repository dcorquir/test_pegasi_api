import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class MongoDB {
  constructor() {
    this.connect();
  }

  private connect(): void {
    const mongoUri: string = process.env.MONGODB_URI as string;
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