import { useTheme } from "app/Providers/Theme/useTheme";
import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import className from "shared/lib/helpers/classNames/classNames";
import Button from "widgets/Button/Button";
import { Input } from "widgets/Input";
import { addCommentSliceActions, addCommentSliceReduser } from "../model/addCommentSlice";
import DinamicModulLoader, { ReducerList } from "shared/lib/DinamicModulLoader/DinamicModulLoader";
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
import { useParams } from "react-router-dom";
import { AppThunkDispatchData } from "shared/lib/helpers/AppDispatch/AppDispath";
import { addComment } from "../model/addComment";
import { PreLoaderGradientBox } from "widgets/PreLoader/ui/PreloaderGradientBoxSize";


const reducers: ReducerList = {
    addCommentUser: addCommentSliceReduser
}

export const CommentAdd = memo(() => {
    const {theme} = useTheme()
    const dispatch = useDispatch()
    const commentData = useSelector((state: StateSchema) => state?.addCommentUser?.data)
    const {id} = useParams<{id: string}>()
    const userId = useSelector((state: StateSchema) => state?.user.authData.id)
    const dispatchData = useDispatch<AppThunkDispatchData>();
    const randomId = new Date().getTime().toString().split("").splice(8,6).join("")
    const isLoading = useSelector((state: StateSchema) => state?.addCommentUser?.isLoading)
    const [value, setValue] = useState('')
    const [valid, setValid] = useState(false)


    const newComment = useCallback((e?: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setValue(e.target.value)
        setValid(false)
        dispatch(addCommentSliceActions.addNewComment({
            text: e.target.value || '',
            id: randomId,
            articleId: id,
            userId: userId.toString()
        }))
    }, [dispatch])

    const saveData = ()=>{
        if(commentData?.text){
            dispatchData(addComment(commentData))
            setValue('')
        } 
        setValid(true)
    }


    return (<DinamicModulLoader reducers={reducers} removeAfterUnmount>

        <div className={className('commentadd', {commentadddark: (theme === "dark" ? true : false), commentaddruby: (theme === "ruby" ? true : false)}, [])}>
            
            {isLoading ? <PreLoaderGradientBox/>:

            <h2
            className={className('', {commenterror: (valid === true ? true : false)}, [])}
            >ВАШ КОМЕНТАР
            </h2>}

            <Input value={value} onChange={newComment} placeholder="add comment" className="commentadd__input"
            />
            <Button onClick={saveData} className="modalbtnOut commentadd__btn">ВІДПРАВИТИ</Button>
           
        </div>
        </DinamicModulLoader>);
});

export default CommentAdd;