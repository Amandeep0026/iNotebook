const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"; // Add a database name, e.g., "inotebook"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to Mongo:", error);
        process.exit(1); // Exit the process with an error code
    }
};

module.exports = connectToMongo;
