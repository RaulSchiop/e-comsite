import mongoose from 'mongoose';


export async function connectToDatabase() {

  if (mongoose.connection.readyState===1) {
    console.log('db is already in use');
    return;
  }

  try {
    
    await mongoose.connect(process.env.MONGODB_URI);

  
    console.log('connected to db');
  } catch (error) {
    console.error('connection error: ', error);
  }
}
