import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/post.js";

const router = express.Router();

//read
router.get("/", verifyToken, getFeedPosts);
router.get("/:id/posts", verifyToken, getUserPosts);

//update
router.patch("/:id/like", verifyToken, likePost);

export default router;
