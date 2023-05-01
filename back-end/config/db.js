const mongoose = require("mongoose");



const connectDB = async() => {
    // const MONGO_URI = "mongodb+srv://elisediata15:MFfh4iG4lUOycHH1@chatapp.abup5uf.mongodb.net/Mern_App?retryWrites=true&w=majority"
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      
    
    }catch (error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
        
};

module.exports = connectDB;