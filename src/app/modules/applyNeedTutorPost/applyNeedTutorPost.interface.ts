import { Types } from 'mongoose';

export type TApplyNeedTutorPost = {
  studentId: Types.ObjectId;
  tutionId: Types.ObjectId;
  tutorId: Types.ObjectId;
  selectStatus?: string;
  paymentStatus?: string;
  isDeleted?: boolean;
};
