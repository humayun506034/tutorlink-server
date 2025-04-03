import express from 'express';
import { ApplyTutorPostController } from './applyNeedTutorPost.controller';

const router = express.Router();

router.post('/apply', ApplyTutorPostController.applyNeedTutionPost);
router.get('/', ApplyTutorPostController.getAllApplyNeedTutionPost);
router.patch('/:id', ApplyTutorPostController.setTutuorSelected);
router.get('/:id', ApplyTutorPostController.getSingleApplyNeedTutionPost);
router.get('/get-tutor-apply/:id', ApplyTutorPostController.getTutorApplyPosts);

router.get(
  '/get-student-enroll-course/:id',
  ApplyTutorPostController.getStudentEnrollCourse,
);
router.get(
  '/get-tutor-sell-course/:id',
  ApplyTutorPostController.getTutorSellNeedTutorCourse,
);

export const applyNeedTutorRoutes = router;
