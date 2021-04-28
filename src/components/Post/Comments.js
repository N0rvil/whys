import React from 'react';

import { shortDate, getDateAndTime } from '../DateFunctions';

import '../../styles/comments.css';
import '../../styles/app.css';

const Comments = (props) =>{

    const renderComments = () => {
        if (!props.article) {
            return <div></div>
        } else {
            if (!props.comments) {
                return (
                    <div className='article loading-bar'>
                        <div className='lodaing-bar__loader'></div>
                    </div>
                )
            } else {
                const commentsList = props.comments
                const sortedList = commentsList.sort((a, b) => {
                    return getDateAndTime(a.date) - getDateAndTime(b.date);
                });
                const renderedCommentsList = sortedList.reverse().map((comment, i) => {
                    return (
                        <li key={i} className='comments__item'>
                            <div className='comments__info'>
                                <img className='comments__profile-photo' src='./images/profile__icon.png' alt='profile_photo' />
                                <div className='comments__box'>
                                    <h3 className='comments__item-name'>{comment.author}</h3>
                                    <p className='comments__item-text'>{comment.text}</p>
                                </div>
                            </div>
                            <time className='commetns__item-date'>{shortDate(comment.date)}</time>
                        </li>
                    )
                })
                return <ul className='comments__list'>{renderedCommentsList}</ul>
            }
        } 
    }

    return (
        <div className='comments'>  
            {renderComments()}
            <div className='loading-bar'>{props.moreComments === null ? <div className='lodaing-bar__loader'></div> : ''}</div>
        </div>
    ) 
};

export default Comments;