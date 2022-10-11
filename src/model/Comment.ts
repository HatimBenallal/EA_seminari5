import { Schema, model } from 'mongoose';

const Comment = new Schema({
	text: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	booking: {
		type: Schema.Types.ObjectId,
		ref: "Booking"
	},
});

export default model('Comment', Comment);