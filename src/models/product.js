import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
    status: Boolean,
    quanlity: Number

})
export default mongoose.model("Product", productSchema)