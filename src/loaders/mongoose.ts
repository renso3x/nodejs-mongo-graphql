import mongoose from 'mongoose';
import { Db } from 'mongodb';

export default async (config: any): Promise<Db> => {
  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
  return connection.connection.db;
};
