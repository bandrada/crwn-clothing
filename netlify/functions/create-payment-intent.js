/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-restricted-globals */
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (request, context) => {
    // const { amount } = JSON.parse(request.body);
    // const paymentIntent = await stripe.paymentIntents.create({
    //     amount,
    //     currency: 'usd',
    //     payment_method_types: ['card']
    // });

    // return Response.json({
    //     message: paymentIntent
    // });

    try {
        const { amount } = JSON.parse(request.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card']
        });
        
        return Response.json({
            message: paymentIntent
        });
    } catch (error) {
        return Response.json({
            request: request,
            context: context,
            error: error
        });
    }
}