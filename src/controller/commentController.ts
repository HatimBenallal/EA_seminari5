import Comment from '../model/Comment';
import Booking from '../model/Booking';
import User from '../model/User';
import { Request, Response } from 'express';

const comment = async (req: Request, res: Response) => {
	const user = req.body.user;
	const booking = req.body.booking;
	const text = req.body.text;
	const user1 = await User.findOne({ name: user });
	if (!user1) {
		return res.status(400).json({ message: 'User not found' });
	}
	const booking1 = await Booking.findOne({ name: booking });
	if (!booking1) {
		return res.status(400).json({ message: 'Booking not found' });
	}
	const newComment = new Comment({
		text,
		user: user1._id,
		booking: booking1._id

	});
	await newComment.save();
	res.status(200).json({ auth: true });
};

const cancel = async (req: Request, res: Response) => {
	
	const userID = req.body.user;
	const bookingID= req.body.booking
	const findcomment = await Booking.findOne({ user: userID, booking:bookingID });
	if (!findcomment) {
		return res.status(400).json({ message: 'Comment not found' });
	}
	await Comment.findByIdAndDelete(findcomment._id);
	res.status(200).json({ auth: true });
};

const getallbyuser = async (req: Request, res: Response) => {
	const comments = await Comment.find().populate('user');
	res.json(comments);
};

const getallbybooking = async (req: Request, res: Response) => {
	const comments = await Comment.find().populate('booking');
	res.json(comments);
};

export default {
	comment,
	cancel,
	getallbyuser,
	getallbybooking
};