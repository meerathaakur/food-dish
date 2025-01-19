const express = require('express');
const { getDishes, getDishById, createDish, updateDish, deleteDish } = require('../controller/dish.controller');
const { errorHandler } = require('../middleware/error.middleware');

const router = express.Router();

// CRUD routes
router.get('/', getDishes); // Get all dishes
router.get('/:id', getDishById); // Get a single dish by ID
router.post('/', createDish); // Create a new dish
router.put('/:id', updateDish); // Update a dish by ID
router.delete('/:id', deleteDish); // Delete a dish by ID

// Apply error handler middleware
router.use(errorHandler);

module.exports = router;
