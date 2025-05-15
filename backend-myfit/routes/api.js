const express = require('express');
const router = express.Router();
const nutritionController = require('../controllers/nutritionController');

// Nutrition endpoints
router.post('/nutrition', nutritionController.getFoodData);
router.get('/search', nutritionController.searchFoods);
router.post('/exercise', nutritionController.getExerciseData);

module.exports = router;