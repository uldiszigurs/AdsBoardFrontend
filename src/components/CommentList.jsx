import React from 'react';

const CommentList = (props) => {
    const {commentList} = props;
    return (
        <React.Fragment>
            {commentList.map(item => {
            const {_id,username,message,createdAt,updatedAt} = item;
            
            })
            }
        </React.Fragment>
    );
};

export default CommentList;