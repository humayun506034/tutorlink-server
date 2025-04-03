import { ApplyNeedTutorPost } from '../applyNeedTutorPost/applyNeedTutorPost.model';
import NeedTutor from '../needTutor/needTutor.model';
import { Order } from './payment.model';

const paymentSuccessfullIntoDB = async (id: string) => {
  // console.log(id);

  const findPost = await ApplyNeedTutorPost.findById(id);
  // console.log(findPost);

  await NeedTutor.findByIdAndUpdate(
    { _id: findPost?.tutionId },
    { paidStatus: 'Done' },
  );
  const result = await ApplyNeedTutorPost.findByIdAndUpdate(id, {
    paymentStatus: 'Done',
  });
  return result;
};

const getAdminOrderDataFromDB = async (email: string) => {
  // console.log(email);
  const result = await Order.find({
    paidStatus: true,
    'product.authorEmail': email,
  });
  return result;
};
const getUserOrderDataFromDB = async (email: string) => {
  // console.log(email);
  const result = await Order.find({
    paidStatus: true,
    'userInfo.email': email,
  });
  return result;
};
const acceptOrderIntoDB = async (id: string) => {
  // console.log(email);
  // console.log(id);

  const result = await Order.findByIdAndUpdate(id, {
    orderStatus: 'accepted',
  });
  return result;
};
const cencelOrderIntoDB = async (id: string) => {
  // console.log(email);
  // console.log(id);
  const result = await Order.findByIdAndUpdate(id, {
    orderStatus: 'cenceled',
  });
  return result;
};
const deleteOrderFromDB = async (id: string) => {
  // console.log(email);
  // console.log(id);
  const result = await Order.findByIdAndDelete(id);
  return result;
};
export const paymentService = {
  paymentSuccessfullIntoDB,
  getAdminOrderDataFromDB,
  getUserOrderDataFromDB,
  acceptOrderIntoDB,
  cencelOrderIntoDB,
  deleteOrderFromDB,
};
