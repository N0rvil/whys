import React from 'react';

import { shortDate } from '../DateFunctions';

import '../../styles/article.css';
import '../../styles/app.css';


const Article = (props) =>{

    const renderArticle = () => {
        if (props.article === false) {
            return (
                <div className='article loading-bar'>
                    <div className='lodaing-bar__loader'></div>
                </div>
            ) 
            
        } else {
            return (
                <div className='article'> 
                    <div className='article__about'>
                        <img className='article__profile-photo' src='./images/profile__icon.png' alt='profile_photo' />
                        <div className='article__box'>
                            <h2 className='article__name'>{props.article.author}</h2>
                            <time className='article__date'>{shortDate(props.article.date)}</time>
                        </div>
                    </div>
                    <p className='article__text'>{props.article.text}</p>
                </div>
            )
        }
    }

    return (
        renderArticle()
    ) 
};

export default Article;