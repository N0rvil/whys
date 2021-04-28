import React, { useState, useEffect } from 'react';

import Article from './Post/Article';
import Comments from './Post/Comments';

import '../styles/app.css';


const Application = () =>{

    const [article, setArticle] = useState(false);
    const [comments, setComments] = useState();
    const [moreComments, setMoreComments] = useState(false);

    const getArticle = () => {
        setTimeout(() => {
            setArticle(document.__article)
        }, 1000)
    }


    const showLessComments = () => {
        setMoreComments(false)
        setComments(document.__comments)
    }

    const getMoreCommetns = async () => {
        setMoreComments(null)
        await setTimeout(() => {
            document.__moreComments.map((comment, i) => {
                setMoreComments(true)
                return setComments(oldComments => [...oldComments, comment]);
            })
        }, 500)   
    }

    const renderButton = () => {
        if (article && comments) {
            return (
                <button onClick={!moreComments ? () => getMoreCommetns() : () => showLessComments()} className='btn__medium' >
                    {moreComments ? 'Hide comments' : (moreComments === null) ? 'Loading' : 'Show more comments'}
                </button>
            )
        } else {
            return <div></div>
        }
    }

    useEffect(() => { 
        const getComments = () => {
            setTimeout(() => {
                setComments(document.__comments)
            }, 1500)
        }
        
        getArticle();
        getComments();
      }, []);

    
    return (
        <div className='app'>  
            <Article article={article} />
            <h2 className='header'>{article ? 'Comments' : ''}</h2>
            <Comments comments={comments} moreComments={moreComments} article={article} />
            {renderButton()}
        </div>
    ) 
};

export default Application;