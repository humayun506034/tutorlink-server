import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ApplyNeedTutorPostService } from './applyNeedTutorPost.service';

const applyNeedTutionPost = catchAsync(async (req, res) => {
  const result = await ApplyNeedTutorPostService.ApplyNeedTutorPostIntoDB(
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
const getAllApplyNeedTutionPost = catchAsync(async (req, res) => {
  const result =
    await ApplyNeedTutorPostService.getAllApplyNeedTutorPostFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Application infomation retrived successfully',
    data: result,
  });
});
const getSingleApplyNeedTutionPost = catchAsync(async (req, res) => {
  const result =
    await ApplyNeedTutorPostService.getSingleApplyNeedTutorPostFromDB(
      req.params.id,
    );
  // console.log(req.params);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Application infomation retrived successfully',
    data: result,
  });
});
const setTutuorSelected = catchAsync(async (req, res) => {
  // console.log(req.params.id);
  // const result =
  await ApplyNeedTutorPostService.setSelectedTutorIntoDB(
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
const getTutorApplyPosts = catchAsync(async (req, res) => {
  // console.log(req.params);
  const result =
    await ApplyNeedTutorPostService.getTutorApplyPostForNeedTutorPostFromDB(
      req.params.id,
    );
  // console.log(req.params);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor applies retrived successfully',
    data: result,
  });
});

const getStudentEnrollCourse = catchAsync(async (req, res) => {
  const result = await ApplyNeedTutorPostService.getStudentEnrollCourseFromDB(
    req.params.id,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student enroll courses retrived successfully',
    data: result,
  });
});
const getTutorSellNeedTutorCourse = catchAsync(async (req, res) => {
  const result = await ApplyNeedTutorPostService.getTutorSellNeedTutorCourseFromDB(
    req.params.id,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutor Course Info retrived successfully',
    data: result,
  });
});

export const ApplyTutorPostController = {
  applyNeedTutionPost,
  getAllApplyNeedTutionPost,
  getSingleApplyNeedTutionPost,
  setTutuorSelected,
  getTutorApplyPosts,
  getStudentEnrollCourse,
  getTutorSellNeedTutorCourse
};
