import React from 'react';
import { render } from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 6:00 PM"
                    avatar={faker.image.avatar()}
                    content="Comment text from the parent component"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 7:00 PM"
                    avatar={faker.image.avatar()}
                    content="Comment text from the parent component"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="John"
                    timeAgo="Today at 8:00 PM"
                    avatar={faker.image.avatar()}
                    content="Comment text from the parent component"
                />
            </ApprovalCard>
        </div>
    );
}

render(
    <App />,
    document.querySelector('#root')
);