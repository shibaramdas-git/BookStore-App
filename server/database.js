const mongoose = require('mongoose')

async function main() {
try {
    await mongoose.connect('mongodb+srv://Dasmongodb:Dasmongodb@cluster0.hnnl1l7.mongodb.net/BookStoreApp-DB');
    console.log("Connected to DB");
} catch (error) {
    console.log(error);
}
}
main();

module.exports = mongoose;