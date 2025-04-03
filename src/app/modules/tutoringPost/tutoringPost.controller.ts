import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TutoringPostService } from './tutoringPost.service';

const addTutoringPost = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await TutoringPostService.addTutoringPostIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: ' Post Added successfully',
    data: result,
  });
});
const getAllTutoringPost = catchAsync(async (req, res) => {
  const result = await TutoringPostService.getAllTutoringPostFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutoring Post retrived successfully',
    data: result,
  });
});
const getOneTutoringPost = catchAsync(async (req, res) => {
  const result = await TutoringPostService.getOneTutoringPostFromDB(
    req.params.id,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutoring Post retrived successfully',
    data: result,
  });
});
const singleTutorTutoringPost = catchAsync(async (req, res) => {
  // console.log(req.params);
  const result = await TutoringPostService.singleTutorTutoringPostFromDB(
    req.params.id,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Single Student Need Tutor Post retrived successfully',
    data: result,
  });
});
const deleteTutoringPost = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await TutoringPostService.deleteTutoringPostFromDB(req.body.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tutoring Post deleted successfully',
    data: result,
  });
});

export const TutoringPostController = {
  addTutoringPost,
  getAllTutoringPost,
  getOneTutoringPost,
  singleTutorTutoringPost,
  deleteTutoringPost
};
