import mongoose from 'mongoose';
import { ITutoringPost } from './tutoringPost.interface';
import { TutoringPost } from './tutoringPost.model';
import { ApplyTutoringPost } from '../applyTutoringPost/applyTutoringPost.model';

const addTutoringPostIntoDB = async (payload: ITutoringPost) => {
  const result = await TutoringPost.create(payload);
  return result;
};

const getAllTutoringPostFromDB = async () => {
  const result = await TutoringPost.find({ isDeleted: false }).populate(
    'tutorId',
  );
  return result;
};
const getOneTutoringPostFromDB = async (id: string) => {
  const result = await TutoringPost.findById(id).populate('tutorId');
  return result;
};

const singleTutorTutoringPostFromDB = async (id: string) => {
  const result = await TutoringPost.find({
    tutorId: new mongoose.Types.ObjectId(id),
    isDeleted: false,});
  return result;
};

const deleteTutoringPostFromDB = async (id: string) => {

 await ApplyTutoringPost.findOneAndUpdate({
    tutionId: new mongoose.Types.ObjectId(id),
  },{isDeleted:true},{new:true});
  const result = await TutoringPost.findByIdAndDelete(id, { isDeleted: true });
  return result;
};

export const TutoringPostService = {
  addTutoringPostIntoDB,
  getAllTutoringPostFromDB,
  getOneTutoringPostFromDB,
  singleTutorTutoringPostFromDB,
  deleteTutoringPostFromDB,
};
