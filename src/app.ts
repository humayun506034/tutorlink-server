/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './app/config';
import SSLCommerzPayment from 'sslcommerz-lts';
import { ApplyNeedTutorPost } from './app/modules/applyNeedTutorPost/applyNeedTutorPost.model';
import { paymentRoutes } from './app/modules/PaymentMangement/payment.route';
import { ApplyTutoringPost } from './app/modules/applyTutoringPost/applyTutoringPost.model';
import { tutoringPaymentRoutes } from './app/modules/TutoringPaymentManagement/payment.route';

const store_id = config.store_id as string;
const store_passwd = config.store_pass as string;
const is_live = false; //true for live, false for sandbox
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['https://tutorlink-online.vercel.app','http://localhost:3000'],
    credentials: true,
  }),
);
app.use(bodyParser.json());

// application route
app.use('/api', router);

// app.use('/order', orderRoutes);

// Test route
const test = async (req: Request, res: Response) => {
  res.send('TutorLink server is running...');
};

app.get('/', test);
app.use('/payment', paymentRoutes);
app.use('/tutoring-payment', tutoringPaymentRoutes);

const tran_id = new mongoose.Types.ObjectId().toString();
app.post('/order', async (req, res) => {
  const orderInfo = req.body;
  // console.log(orderInfo);
  const product = (await ApplyNeedTutorPost.findById({ _id: orderInfo.id })
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId')) as any;
  // console.log(product);

  const { studentId, tutionId } = product;

  // console.log({ studentId, tutionId, tutorId });

  const data = {
    total_amount: tutionId?.salaryRange,
    currency: 'BDT',
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: `https://tutorlink-backend.vercel.app/payment/success/${product?._id.toHexString()}`,
    fail_url: `https://tutorlink-backend.vercel.app/payment/failed/${product?._id.toHexString()}`,
    cancel_url: 'http://localhost:3030/cancel',
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Books',
    product_profile: product?._id.toHexString(),
    cus_name: studentId?.name,
    cus_email: studentId?.email,
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
  };

  // console.log(data);

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

  // console.log(sslcz);
  try {
    const apiResponse: any = await sslcz.init(data); // Use await here
    // Redirect the user to payment gateway
    const GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });

    // console.log('Final Order : ', finalOrder);
    // console.log('Order Saved: ', result);

    // console.log('Redirecting to: ', GatewayPageURL);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  } catch (error) {
    // console.error('Error occurred:', error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});
app.post('/tutoring-order', async (req, res) => {
  const orderInfo = req.body;
  // console.log(orderInfo);
  const product = (await ApplyTutoringPost.findById({ _id: orderInfo.id })
    .populate('studentId')
    .populate('tutorId')
    .populate('tutionId')) as any;
  // console.log(product);

  const { studentId, tutionId } = product;

  // console.log({ studentId, tutionId, tutorId });

  const data = {
    total_amount: tutionId?.salaryRange,
    currency: 'BDT',
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: `https://tutorlink-backend.vercel.app/tutoring-payment/success/${product?._id.toHexString()}`,
    fail_url: `https://tutorlink-backend.vercel.app/tutoring-payment/failed/${product?._id.toHexString()}`,
    cancel_url: 'http://localhost:3030/cancel',
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Books',
    product_profile: product?._id.toHexString(),
    cus_name: studentId?.name,
    cus_email: studentId?.email,
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
  };

  // console.log(data);

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

  // // console.log(sslcz);
  try {
    const apiResponse: any = await sslcz.init(data); // Use await here
    // Redirect the user to payment gateway
    const GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });

    // console.log('Final Order : ', finalOrder);
    // console.log('Order Saved: ', result);

    // console.log('Redirecting to: ', GatewayPageURL);
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  } catch (error) {
    // console.error('Error occurred:', error);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

// Error handlers
app.use(globalErrorHandler);
app.use(notFound);

export default app;
