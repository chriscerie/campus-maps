import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import {getComments as getCommentsApi} from '../api';
import comment from '../types';
import Comment from './Comment';


const Comments = () => {
    const [backendComments, setBackendComments] = useState([]);
    const rootComments : Array<comment> = backendComments.filter((backendComment: comment) => backendComment.parentId === null); //root comments are comments with no parent (is not a reply)
    const getReplies = (commentId : string) => {
        return backendComments.filter((backendComment : comment) => backendComment.parentId === commentId)
        .sort((a : comment,b : comment) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    }

    useEffect(() => {
        getCommentsApi().then( (data : any)  => { //returns array of comments from backend
            setBackendComments(data);
        });
    }, []);

    return (
        <div className = "comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comments-container">
                {rootComments.map((rootComment: comment) => (
                    <Comment 
                        key={rootComment.id} 
                        {...rootComment} 
                        {...getReplies(rootComment.id)} 
                    /> //key, comm, replies
                ))}
            </div>
        </div>
    )
};

export default Comments;