const Dish = require('../model/dish.model');

// @desc Get all dishes
// @route GET /api/dishes
// @access Public
exports.getDishes = async (req, res, next) => {
    try {
        const dishes = await Dish.find();
        res.status(200).json(dishes);
    } catch (error) {
        next(error);
    }
};

// @desc Get a single dish by ID
// @route GET /api/dishes/:id
// @access Public
exports.getDishById = async (req, res, next) => {
    try {
        const Id = req.params.id;
        console.log(req.query);
        const dish = await Dish.findById(Id);
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.status(200).json(dish);
    } catch (error) {
        next(error);
    }
};

// @desc Create a new dish
// @route POST /api/dishes
// @access Private
exports.createDish = async (req, res, next) => {
    try {
        const { dishName, items } = req.body;
        if (!dishName || !items || !Array.isArray(items)) {
            return res.status(400).json({ message: 'Invalid input data' });
        }
        const dish = new Dish({ dishName, items });
        const savedDish = await dish.save();
        res.status(201).json(savedDish);
    } catch (error) {
        next(error);
    }
};

// @desc Update a dish by ID
// @route PUT /api/dishes/:id
// @access Private
exports.updateDish = async (req, res, next) => {
    try {
        const { dishName, items } = req.body;

        const updatedDish = await Dish.findByIdAndUpdate(
            req.params.id,
            { dishName, items },
            { new: true, runValidators: true }
        );

        if (!updatedDish) {
            return res.status(404).json({ message: 'Dish not found' });
        }

        res.status(200).json(updatedDish);
    } catch (error) {
        next(error);
    }
};

// @desc Delete a dish by ID
// @route DELETE /api/dishes/:id
// @access Private
exports.deleteDish = async (req, res, next) => {
    try {
        const dish = await Dish.findByIdAndDelete(req.params.id);
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.status(200).json({ message: 'Dish deleted successfully' });
    } catch (error) {
        next(error);
    }
};
