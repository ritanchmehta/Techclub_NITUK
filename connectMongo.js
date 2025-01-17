const mongoose=require('mongoose')

const mongoAtlasUri="mongodb+srv://sandeep:helloji@cluster0.ufrq1vk.mongodb.net/techClub_nituk?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(mongoAtlasUri, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

module.exports = connectDB;
