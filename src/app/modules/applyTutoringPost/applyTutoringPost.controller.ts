import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ApplyTutoringPostService } from './applyTutoringPost.service';

const applyTutoringPost = catchAsync(async (req, res) => {
  const result = await ApplyTutoringPostService.ApplyTutoringPostIntoDB(
    req.body,
  );
  // console.log(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Application Done',
    data: result,
  });
});
// const getAllApplyNeedTutionPost = catchAsync(async (req, res) => {
//   const result =
//     await ApplyNeedTutorPostService.getAllApplyNeedTutorPostFromDB();
//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     success: true,
//     message: 'Application infomation retrived successfully',
//     data: result,
//   });
// });
// const getSingleApplyNeedTutionPost = catchAsync(async (req, res) => {
//   const result =
//     await ApplyNeedTutorPostService.getSingleApplyNeedTutorPostFromDB(
//       req.params.id,
//     );
//   // console.log(req.params);
//   sendResponse(res, {
//     statusCode: StatusCodes.OK,
//     success: true,
//     message: 'Application infomation retrived successfully',
//     data: result,
//   });
// });
const setStudentSelected = catchAsync(async (req, res) => {
  // console.log(req.params.id);
  // const result =
  await ApplyTutoringPostService.setSelectedStudentIntoDB(
    req.params.id,
    req.body,
  );
  // console.log(req.params);
  // console.log(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor selected successfully',
    // data: result,
  });
});
const getTutorTutoringApply = catchAsync(async (req, res) => {
  // console.log(req.params);
  const result =
    await ApplyTutoringPostService.getTutorTutoringApplyListFromDBFromDB(
      req.params.id,
    );
  // console.log(req.params);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutors Posts retrived successfully',
    data: result,
  });
});


const getStudentApplyForApplyTutoringPost = catchAsync(async (req, res) => {
  // console.log(req.params);
  const result =
    await ApplyTutoringPostService.getStudentApplyForApplyTutoringPostFromDB(
      req.params.id,
    );
  // console.log(req.params);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student applies retrived successfully',
    data: result,
  });
});
const getStudentEnrollTutoringCourse = catchAsync(async (req, res) => {
  const result = await ApplyTutoringPostService.getStudentEnrollTutoringCourseFromDB(
    req.params.id,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student enroll courses retrived successfully',
    data: result,
  });
});


const getTutorSellApplyTutoringCourse = catchAsync(async (req, res) => {
  const result = await ApplyTutoringPostService.getTutorSellApplyTutoringCourseFromDB(
    req.params.id,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor Course Info retrived successfully',
    data: result,
  });
});
export const ApplyTutoringController = {
  applyTutoringPost,
  getTutorTutoringApply,
  setStudentSelected,
  getStudentApplyForApplyTutoringPost,
  getStudentEnrollTutoringCourse,
  getTutorSellApplyTutoringCourse
};
