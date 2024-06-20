import { useTheme } from "app/Providers/Theme/useTheme";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import {Comment} from "../CommentTypes/commentsTypes"


export interface CommentCardProps {
    comments: Comment
    isLoading?: boolean
}




export const CommentCard = memo(({comments, isLoading}: CommentCardProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()




    return (
        <div className={className('commentcard', {commentcarddark: (theme === "dark" ? true : false), ccommentcardruby: (theme === "ruby" ? true : false)}, [])}>
            <div className="avatar-box">{comments.user.avatar && <img className="avatar-card" src={comments.user.avatar} alt="avatar" />}</div>
            <div className="commentcard__title">
                <h3>{comments.user.username}</h3>
                <h3>{comments.id}</h3>
            </div>
            <div className="commentcard__text">
            <p>{comments.text}</p>
            </div>


        </div>
    );
});

export default CommentCard;