const mongoose = require('mongoose');

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_DB);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
