import catchAsync from '../../utils/catchAsync';
import { paymentService } from './payment.service';

const tutoringPaymentSuccess = catchAsync(async (req, res) => {
  const productId = req.params.productId;
  // console.log('Transaction ID:', tranId);
  await paymentService.tutoringPaymentSuccessfullIntoDB(productId);

  res.redirect(`https://tutorlink-online.vercel.app/payment-successful/${req.params.productId}`);
});
const tutoringPaymentFailed = catchAsync(async (req, res) => {
  res.redirect(`https://tutorlink-online.vercel.app/payment-failed/${req.params.productId}`);
});

export const paymentController = {
  tutoringPaymentSuccess,
  tutoringPaymentFailed,

};
