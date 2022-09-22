import React from 'react';

const CommentDetail = props => {    
    const { avatar, author, timestamp, content } = props.commentData;    
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={ avatar }/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    { author }
                </a>
                <div className="metada">
                    <span className="date"> { timestamp }</span>
                </div>
        	    <div className="text"> { content } </div>
            </div>
        </div>
    );
}

export default CommentDetail;