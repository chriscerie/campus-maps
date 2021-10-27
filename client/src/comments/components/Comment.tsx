import comment from '../types'

const Comment = (comm : comment, replies: comment) => {
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="../user-icon.png"/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comm.username}</div>
                    <div>{comm.createdAt}</div>
                </div>
                <div className="comment-text">{comm.body}</div>
                {replies.userId.length > 0 && (
                    <div className="replies">
                        {replies.map((reply : comment) => (
                            <Comment {...reply} key={reply.id} {...replies}/> //replies part might be wrong 
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;