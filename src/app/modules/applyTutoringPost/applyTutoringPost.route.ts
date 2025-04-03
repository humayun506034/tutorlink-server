import express from 'express';
import { ApplyTutoringController } from './applyTutoringPost.controller';

const router = express.Router();

router.post('/apply', ApplyTutoringController.applyTutoringPost);
// router.get('/', ApplyTutorPostController.getAllApplyNeedTutionPost);
router.patch('/:id', ApplyTutoringController.setStudentSelected);
// router.get('/:id', ApplyTutorPostController.getSingleApplyNeedTutionPost);
router.get(
  '/tutoring-apply/:id',
  ApplyTutoringController.getTutorTutoringApply,
);
router.get(
  '/get-student-apply/:id',
  ApplyTutoringController.getStudentApplyForApplyTutoringPost,
);

router.get(
  '/get-student-enroll-course/:id',
  ApplyTutoringController.getStudentEnrollTutoringCourse,
);



router.get(
  '/get-tutor-sell-course/:id',
  ApplyTutoringController.getTutorSellApplyTutoringCourse,
);

export const applyTutoringRoutes = router;
