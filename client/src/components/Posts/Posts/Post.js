import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizcon from '@material-ui/icons/MoreHoriz';

import moment from 'moment';

import useStyles from './styles';

const Post = (post) => {
    const classes = useStyles();
    const postContent = post.post;
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={postContent.selectedFile} title={post.title} component='img'/>
            <div className={classes.overlay}>
                <Typography variant="h6">{ postContent.creator }</Typography>
                <Typography variant="body2">{moment(postContent.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}> <MoreHorizcon fontSize="default" /> </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{postContent.tags?.map((tag) => `#${tag} `)}</Typography>
            </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{postContent.title}</Typography>
            <CardContent>
                 <Typography variant="body2" color="textSecondary" component="p">{postContent.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => { console.log(postContent) }}> <ThumbUpAltIcon fontSize="small" /> Like {postContent.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => { console.log(post.post.title) }}> <DeleteIcon fontSize="small" /> Delete </Button>
            </CardActions>
        </Card>
    )
}

export default Post;