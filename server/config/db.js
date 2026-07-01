import mongoose from 'mongoose';


  const connectedDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log('MongoDB connected Successfully')
    } catch (err) {
      console.log(err.message)
      console.log(process.env.MONGO_URI)
    }
  }


  export default connectedDB;