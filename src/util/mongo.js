// file công cụ sử lý db
module.exports = {
    // trả về 1 obj

    // với 1 list 
    mutipleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map(mongoose => mongoose.toObject())
    },

    // với 1 đối tượng
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};