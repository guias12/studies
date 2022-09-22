import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {

    const Comments = [
        {
            "author": "Naruto",
            "timestamp": "Yesterday",
            "content": "Nice post Dattebayo!",
            "avatar": faker.image.avatar(),
        },
        {
            "author": "Sakura",
            "timestamp": "Today at 09:00 AM",
            "content": "I don't think so",
            "avatar": faker.image.avatar(),
        },
        {
            "author": "Kakashi",
            "timestamp": "Today at 12:00 AM",
            "content": "Unbelievable",
            "avatar": faker.image.avatar(),
        },
        {
            "author": "Itachi",
            "timestamp": "Last Week",
            "content": "Really Nice",
            "avatar": faker.image.avatar(),
        },
    ];

    return (
        <div className="ui container comments">            
            {
                Comments.map((comment, index) => {
                    return (
                        <ApprovalCard>
                            <CommentDetail key={ index } commentData={ comment } />
                        </ApprovalCard>
                    );
                })                
            }
            
       </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);