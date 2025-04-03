import { Schema, model, } from 'mongoose';
import { TNeedTutor } from './needTutor.interface';

const NeedTutorSchema = new Schema<TNeedTutor>({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  heading: {
    type: String,
    required: true,
    trim: true,
  },
  institute: {
    type: String,
    required: true,
    trim: true,
  },
  tutoringTime: {
    type: String,
    required: true,
  },
  numberOfStudent: {
    type: String,
    required: true,
  },
  studentGender: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
    trim: true,
  },
  area: {
    type: String,
    required: true,
    trim: true,
  },
  medium: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  tutoringType: {
    type: String,
    required: true,
  },
  teacherGender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  daysPerWeek: {
    type: String,
    required: true,
  },
  salaryRange: {
    type: String,
    required: true,
  },
  selectedStatus: {
    type: String,
    required: false,
    default: 'Not_Selected',
  },
  
  paidStatus: {
    type: String,
    required: false,
    default: 'Not_Pay',
  },
  isDeleted: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const NeedTutor = model('NeedTutor', NeedTutorSchema);

export default NeedTutor;
