import mongoose from "mongoose";

// function to connect to the mongodb database
export const connectDB = async () => {
	try {
		mongoose.connection.on("connected", () =>
			console.log("Database Connected")
		);
		await mongoose.connect(`${process.env.MONGODB_URI}/talkive`);
	} catch (error) {
		console.log(error);
	}
};
