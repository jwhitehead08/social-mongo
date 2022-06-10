const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getAllThoughts,
  getThoughtById,
  updateThought
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)

// /api/thoughts/<UserId>
router
  .route('/:UserId')
  .post(addThought);

// /api/thoughts/<UserId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .put(addReaction)
  .delete(removeThought)
  .delete(removeReaction)

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
