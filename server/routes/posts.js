import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';

const router = express.Router();

// starts at http://localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //patch is used for updating existing documents
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;