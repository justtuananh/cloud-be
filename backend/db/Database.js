const mongoose = require('mongoose');

// Function to connect to a MongoDB Replica Set
const connectDatabase = () => {
    mongoose.connect(
        'mongodb+srv://tuananh18:18072001Z@cluster0.wukd6dt.mongodb.net/', // Connection string for the replica set
        {
            useNewUrlParser: true, // Enable use of new connection string parser
            useUnifiedTopology: true, // Enable the new topology engine
        }
    )
    .then((data) => {
        console.log(`MongoDB is connected with server: ${data.connection.host}`); // Log successful connection
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err); // Log error on connection failure
    });
};

// Export the function to be used in other parts of the application
module.exports = connectDatabase;