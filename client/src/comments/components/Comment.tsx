import comment from '../types'


const Comment = (comm : comment, replies: Array<comment>) => {
    const emptyArrayReplies = {
        replies : []
    }
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="../user-icon.png" alt=""/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comm.username}</div>
                    <div>{comm.createdAt}</div>
                </div>
                <div className="comment-text">{comm.body}</div>
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map((reply : comment) => (
                            <Comment {...reply} key={reply.id} {...emptyArrayReplies} /> //replies part might be wrong 
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;