import express from 'express';

import { getPosts, createPost, updatePost} from '../controllers/posts.js';

const router = express.Router();

// starts at http://localhost:5000/posts

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost) //patch is used for updating existing documents

export default router;