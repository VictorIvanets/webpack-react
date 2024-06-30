import { useTheme } from "app/Providers/Theme/useTheme";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import { ProfileProps, ProfileSchema } from "pages/ProfilePage";
import { User } from "entities/UserSlise";
import {Comment, CommentProfileSchema} from "../CommentTypes/commentsTypes"
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatchLogin } from "shared/lib/helpers/AppDispatch/AppDispath";
import { fetchProfileComments } from "./fetchUserComments";
import DinamicModulLoader, { ReducerList } from "shared/lib/DinamicModulLoader/DinamicModulLoader";
import { profileCommentSliceReduser } from "./UserCommentsSlice";
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";
import { PreLoaderGradientBox } from "widgets/PreLoader/ui/PreloaderGradientBoxSize";

const reducer: ReducerList = {
    CommentUser: profileCommentSliceReduser
}

export interface UserCommentsProps {
    userId: string
}

export const UserComments = memo((props: UserCommentsProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    console.log(props.userId)
    const dispatchLogin = useDispatch<AppThunkDispatchLogin>();

    const isLoading = useSelector((state: StateSchema) => state.CommentUser?.isLoading || undefined)
    const data = useSelector((state: StateSchema) => state.CommentUser?.data || undefined)
    const error = useSelector((state: StateSchema) => state.CommentUser?.error || undefined)


    useEffect(()=>{
        dispatchLogin(fetchProfileComments(props.userId))
    },[dispatchLogin])


    return (
        <DinamicModulLoader reducers={reducer} removeAfterUnmount>

        <div className={className('UserComments', {UserCommentsdark: (theme === "dark" ? true : false), UserCommentsruby: (theme === "ruby" ? true : false)}, [])}>
           { isLoading ? <PreLoaderGradientBox/> : error ? <h2>{error.toString()}</h2> : <div className="UserComments__data">
                <div 
                className="UserComments__data__avatar-box">
                    {data?.avatar && <img className="UserComments__data__avatar-card" src={data?.avatar} alt="avatar" />}
                </div>
                <div className="UserComments__data__text">
                    <h2 className="mb1">{t("Ім'я")}: {data?.first}</h2>
                    <h2 className="mb1">{t("Прізвище")}: {data?.lastname}</h2>
                    <h2 className="mb1">{t("Країна")}: {data?.country}</h2>
                    <h2 className="mb1">{t("Місто")}: {data?.city}</h2>
                    <h2 className="mb1">{t("Вік")}: {data?.age} {t("років")}</h2>
                    <h2 className="mb1">{t("Нік")}: {data?.username}</h2>
                </div>
            </div>}

        </div>

        </DinamicModulLoader>
    );
});

export default UserComments;