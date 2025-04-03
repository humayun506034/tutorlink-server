import mongoose from 'mongoose';
import { TApplyTutoringPost } from './applyTutoringPost.interface';
import { ApplyTutoringPost } from './applyTutoringPost.model';
import { TutoringPost } from '../tutoringPost/tutoringPost.model';

const ApplyTutoringPostIntoDB = async (payload: TApplyTutoringPost) => {

    const findPreviewsData = await ApplyTutoringPost.find({
      studentId: payload?.studentId,
      tutionId: payload?.tutionId,
    });
  
    // console.log(findPreviewsData);
  
    if (findPreviewsData.length > 0) {
      throw new Error('You are already apply here...');
    }


  const result = await ApplyTutoringPost.create(payload);
  return result;
};



const setSelectedStudentIntoDB = async (
  id: string,
  payload: Record<string, unknown>,
) => {
  // console.log("service",id);
  //  console.log(id,payload);
  // const result = await ApplyTutoringPost.findByIdAndUpdate(id, payload);

  const findProduct = await ApplyTutoringPost.findById(id);
  // console.log(findProduct);

  await TutoringPost.findByIdAndUpdate(
    { _id: findProduct?.tutionId },
    { selectedStatus: 'Selected' },
  );
  // console.log(findTution);

  const result = await ApplyTutoringPost.findByIdAndUpdate(id, payload);

  return result;
};

const getTutorTutoringApplyListFromDBFromDB = async (id: string) => {
  // console.log(id);
  const result = await ApplyTutoringPost.find({
    tutionId: new mongoose.Types.ObjectId(id),
    isDeleted:false
  })
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId');
  return result;
};

const getStudentEnrollTutoringCourseFromDB = async (id: string) => {
  const result = await ApplyTutoringPost.find({
    studentId: new mongoose.Types.ObjectId(id),
    paymentStatus: 'Done',
  })
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId');
  return result;
};

const getStudentApplyForApplyTutoringPostFromDB = async (id: string) => {
  // console.log(id);
  const result = await ApplyTutoringPost.find(
    {
      studentId: new mongoose.Types.ObjectId(id), isDeleted:false
    },
   
  )
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId');
  return result;
};

const getTutorSellApplyTutoringCourseFromDB = async (id: string) => {
  const result = await ApplyTutoringPost.find({
    tutorId: new mongoose.Types.ObjectId(id),
    paymentStatus: 'Done',
  })
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId');
  return result;
};

export const ApplyTutoringPostService = {
  ApplyTutoringPostIntoDB,
  getTutorTutoringApplyListFromDBFromDB,
  setSelectedStudentIntoDB,
  getStudentApplyForApplyTutoringPostFromDB,
  getStudentEnrollTutoringCourseFromDB,
  getTutorSellApplyTutoringCourseFromDB
};
