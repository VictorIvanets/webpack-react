import { useTheme } from "app/Providers/Theme/useTheme";
import { useTranslation } from "react-i18next";
import DinamicModulLoader, { ReducerList } from "shared/lib/DinamicModulLoader/DinamicModulLoader";
import className from "shared/lib/helpers/classNames/classNames";
import { ArticlesDetailsReduser } from "../ArticlesDetailsConfig/ArticlesDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatchData } from "shared/lib/helpers/AppDispatch/AppDispath";
import { memo, useCallback, useEffect } from "react";
import { fethArticalById } from "../ArticlesDetailsConfig/fethArticalById";
import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema";
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";
import { ArticleBlock, ArticleBlockType } from "pages/ArticlesPage/articleTypes/articleTypes";
import ArticlesDetailsCode from "./ArticlesDetailsCode";
import ArticlesDetailsText from "./ArticlesDetailsText";
import ArticlesDetailsImage from "./ArticlesDetailsImage";
import { useNavigate } from "react-router-dom";
import Button from "widgets/Button/Button";


interface ArticlesDetailsProps {
    id: string
    
}

const reducers: ReducerList = {
    ArticlesDetail: ArticlesDetailsReduser
}


export const ArticlesDetails = memo(({id}: ArticlesDetailsProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    const dispatchData = useDispatch<AppThunkDispatchData>();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatchData(fethArticalById(`/${id}`))
    },[dispatchData, id])

    const data = useSelector((state: StateSchema) => state?.ArticlesDetail?.data || undefined)
    const error = useSelector((state: StateSchema) => state?.ArticlesDetail?.error || undefined)
    const isLoading = useSelector((state: StateSchema) => state?.ArticlesDetail?.isLoading || undefined)


    const renderBlock = useCallback((block: ArticleBlock)=>{
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticlesDetailsCode key={block.id} block={block}/>
            case ArticleBlockType.IMAGE:
                return <ArticlesDetailsImage key={block.id} block={block}/> 
            case ArticleBlockType.TEXT:
                return <ArticlesDetailsText key={block.id} block={block}/>
            default: 
            return null
        }
    },[])
   
    let content

    if(isLoading) {
        content = <PreLoaderGradient/>
    } else if (error) {
        content = <h1>{error === "string"? error : 'ERROR NOT ARTICLE'}</h1>
    } else {
        content = <>{data && <div className="ArticlesDetails__content__box">
            
            <div className="ArticlesDetails__content__top">

            <div className="ArticlesDetails__content__header">          
            <h1 className="Articalh1">{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <h3> Створено: {data.createdAt}</h3>
            <h3> Переглядів: {data.views}</h3>

            </div>

            <img className="ArticlesDetails__content__img" src={data.img} alt="random img" />

            </div>

            {data?.blocks.map(renderBlock)}
  


            </div>
        }</>
    }


    let contentHeader
    if(isLoading) {
        contentHeader = <PreLoaderGradient/>
    } else if (error) {
        contentHeader = <h1> </h1>
    } else {
        contentHeader = <h1>{data && data.type.join(", ")}</h1>
    }



    return <DinamicModulLoader reducers={reducers} removeAfterUnmount = {true}>
        <div className={className('ArticlesDetails', {ArticlesDetailsdark: (theme === "dark" ? true : false), ArticlesDetailsruby: (theme === "ruby" ? true : false)}, [])}>

        <div className={className('artidetapage__header', {artidetapagedark__header: (theme === "dark" ? true : false), artidetapageruby__header: (theme === "ruby" ? true : false)},  [])}>
            <h1 className='margin1'>{contentHeader}</h1>
        </div>
         
            <div className="ArticlesDetails__content">
            <Button className='btnback' onClick={()=>navigate(-1)}>BACK</Button>
                {content}  
            </div>
        

        </div>
        </DinamicModulLoader>;
});

export default ArticlesDetails;

