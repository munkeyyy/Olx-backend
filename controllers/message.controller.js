import conversationModel from "../models/conversation.model";
import messageModel from "../models/message.model";
import Message from "../models/message.model";
import userModel from "../models/user.model";
import { getReceiverSocketId, getRecieverSocketId, io } from "../socket/socket";

export const sendMessage = async (req, res) => {
  try {
    console.log(req.user)
    const { message } = req.body;
    const recieverId = req.params.recId;
    const senderId = req.user._id
    
		let conversation = await conversationModel.findOne({
			participants: { $all: [senderId, recieverId] },
		});

		if (!conversation) {
			conversation = await conversationModel.create({
				participants: [senderId, recieverId],
			});
		}

		const newMessage = new Message({
			senderId,
			recieverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// await conversation.save();
		// await newMessage.save();

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY WILL GO HERE
		const receiverSocketId = getReceiverSocketId(recieverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

		res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error sending message:", error); // Add
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const senderId = req.user._id;

		const conversation = await conversationModel.findOne({
			participants: { $all: [senderId,chatId] },
		}).populate("messages");
    console.log(conversation)
    if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
