import express from 'express';
import { TutoringPostController } from './tutoringPost.controller';

const router = express.Router();

router.post('/add-tutoring-post', TutoringPostController.addTutoringPost);
router.get('/', TutoringPostController.getAllTutoringPost);
router.get('/:id', TutoringPostController.getOneTutoringPost);
router.get(
  '/my-tutoring-post/:id',
  TutoringPostController.singleTutorTutoringPost,
);

router.delete(
  '/delete-tutoring-post',
  TutoringPostController.deleteTutoringPost,
);

export const tutoringPostRoutes = router;
