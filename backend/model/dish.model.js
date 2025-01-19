const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    calories: { type: Number, required: true }
});

const DishSchema = new mongoose.Schema({
    dishName: { type: String, required: true },
    items: [ItemSchema],
    imageSrc: { type: String, required: true },
    price: { type: Number, required: true }
});

const Dish = mongoose.model('Dish', DishSchema);

module.exports = Dish;
