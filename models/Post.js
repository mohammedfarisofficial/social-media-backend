import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      requied: true,
    },
    firstName: {
      type: String,
      requied: true,
    },
    lastName: {
      type: String,
      requied: true,
    },
    location: String,
    description: String,
    picture2: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      types: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
