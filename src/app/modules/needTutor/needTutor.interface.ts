import { Types } from 'mongoose';

export type TNeedTutor = {
  studentId: Types.ObjectId;
  heading: string;
  institute: string;
  tutoringTime: string;
  numberOfStudent: string;
  studentGender: string;
  district: string;
  area: string;
  medium: string;
  class: string;
  subject: string;
  tutoringType: string;
  teacherGender: string;
  daysPerWeek: string;
  salaryRange: string;
  selectedStatus?: string;
  paidStatus?: string;
  isDeleted?: boolean;
};
