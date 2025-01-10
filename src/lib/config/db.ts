import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI as string);
    if (connection.readyState === 1) {
      console.log('DB connected successfully');
      return connection.getClient();
    }
  } catch (error) {
    console.log('DB not connected');
    console.error(error);
    return Promise.reject(error);
  }
};

let isConnected = false;

// export const connectDB = async () => {
//   try {
//     if (!MONGODB_URI) {
//       console.error('No MongoDB URI found in environment variables.');
//       return null;
//     }

//     // Check if the connection is active before re-connecting
//     if (isConnected && mongoose.connection.readyState === 1) {
//       console.log('Using existing database connection');
//       return mongoose.connection.getClient();
//     }

//     // Establish the MongoDB connection
//     const { connection } = await mongoose.connect(MONGODB_URI);

//     isConnected = connection.readyState === 1; // Track if connection is successfully established
//     console.log('DB connected successfully');
//     return connection.getClient();
//   } catch (error) {
//     console.error('Could not connect to DB:', error);

//     // Optionally, add a retry mechanism with exponential backoff here if desired
//     isConnected = false; // Reset in case of failure
//     return null;
//   }
// };
