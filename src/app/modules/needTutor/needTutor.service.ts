import mongoose from 'mongoose';
import { TNeedTutor } from './needTutor.interface';
import NeedTutor from './needTutor.model';
import { ApplyNeedTutorPost } from '../applyNeedTutorPost/applyNeedTutorPost.model';

const addNeedTutorPostIntoDB = async (payload: TNeedTutor) => {
  const result = await NeedTutor.create(payload);
  return result;
};

const getAllNeedTutorPostFromDB = async () => {
  const result = await NeedTutor.find({ isDeleted: false }).populate(
    'studentId',
  );
  return result;
};
const getOneNeedTutorPostFromDB = async (id: string) => {
  const result = await NeedTutor.findById(id).populate('studentId');
  return result;
};
// const singleStudentNeedTutorPostFromDB = async (id: string) => {
//   const result = await NeedTutor.findOne({ studentId: ObjectId(id) });
//   return result;
// };

const singleStudentNeedTutorPostFromDB = async (id: string) => {
  const result = await NeedTutor.find({
    studentId: new mongoose.Types.ObjectId(id),
    isDeleted: false, // ফিল্টার এখানে যোগ করতে হবে
  });
  return result;
};

const deleteTutorNeedPostFromDB = async (id: string) => {
  // console.log(id);

  await ApplyNeedTutorPost.findOneAndUpdate({
    tutionId: new mongoose.Types.ObjectId(id),
  },{isDeleted:true},{new:true});
  // console.log(findProduct);

  // console.log(findProduct);



  // console.log(updatedProduct);

  const result = await NeedTutor.findByIdAndUpdate(id, { isDeleted: true });
  return result;
};

export const NeedTutorService = {
  addNeedTutorPostIntoDB,
  //   getAllTutorInfomationFromDB
  getAllNeedTutorPostFromDB,
  getOneNeedTutorPostFromDB,
  singleStudentNeedTutorPostFromDB,
  deleteTutorNeedPostFromDB,
};
