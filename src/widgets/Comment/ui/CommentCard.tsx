import { useTheme } from "app/Providers/Theme/useTheme";
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import {Comment} from "../CommentTypes/commentsTypes"
import UserComments from "../UserComments/UserComments";
import Button from "widgets/Button/Button";


export interface CommentCardProps {
    comments: Comment
    isLoading?: boolean
}


export const CommentCard = memo(({comments, isLoading}: CommentCardProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    const [userComment, setUserComment] = useState(false)

    function userWindow () {
        setUserComment(!userComment)
    }

    useEffect(()=>{
        if(userComment) {
            window.addEventListener('keydown', (e: KeyboardEvent)=>{
                if(e.key === 'Escape'){
                    userWindow()
                }
            })
        }
        return window.removeEventListener('keydown', (e: KeyboardEvent)=>{
            if(e.key === 'Escape'){
                userWindow()
            }
        } )
    }, [userComment])



    return (
        <div className={className('commentcard', {commentcarddark: (theme === "dark" ? true : false), ccommentcardruby: (theme === "ruby" ? true : false)}, [])}>
            <Button className="userBtn" 
            onClick={userWindow}
            // onMouseDown={userWindow} 
            // onMouseUp={userWindow}
            >
            <div className="avatar-box">{comments.user.avatar && <img className="avatar-card" src={comments.user.avatar} alt="avatar" />}</div>
            </Button>
            {userComment && <UserComments userId={comments.userId}/>}
            <div className="commentcard__title">
                <h3>user: {comments.user.username}</h3>
                <h3>com.id: {comments.id}</h3>
                <h3>art.id: {comments.articleId}</h3>
            </div>
            <div className="commentcard__text">
            <p>{comments.text}</p>
            </div>


        </div>
    );
});

export default CommentCard;