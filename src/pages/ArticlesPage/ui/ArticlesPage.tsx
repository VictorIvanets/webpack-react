import { useTheme } from "app/Providers/Theme/useTheme";
import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import className from "shared/lib/helpers/classNames/classNames";
import { Article, ArticleView } from "../articleTypes/articleTypes";
import { $api } from "shared/api/api";
import { useState, useEffect, memo} from "react";
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";
import {ArticalList} from "../index";
import Button from "widgets/Button/Button";
import VievBig from 'shared/assets/viewbig.svg'
import VievSmall from 'shared/assets/viewsmall.svg'



export const ArticlesPage = memo(() => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    const [viewList, setViewList] = useState(ArticleView.BIG)


    const [data, setData] = useState(null)

    const fethArtical = async () => {
        try {
            const {data} = await $api.get<Article[]>(`/news`) 
           
                setData(data)
  
        } catch(e) {
            if (e instanceof AxiosError){
                console.log(e.message)
            }
            return
        }
    }
  
    useEffect(()=>{
        fethArtical()
    }, [])

    const viewWin = ()=>{
        if (viewList === ArticleView.BIG) {
            setViewList(ArticleView.SMALL)} 
        if (viewList === ArticleView.SMALL) {
            setViewList(ArticleView.BIG)} }

    return (
        <div className={className('artipage', {artipagedark: (theme === "dark" ? true : false), artipageruby: (theme === "ruby" ? true : false)}, [])}>

        <div className={className('artipage__header', {artipagedark__header: (theme === "dark" ? true : false), artipageruby__header: (theme === "ruby" ? true : false)},  [])}>
            
            <button onClick={viewWin} className="artipage__header__btn">
                {viewList === ArticleView.SMALL ? <VievBig className="artpagesvg"/> : <VievSmall className="artpagesvg"/>}
            </button>
            
            <h1 className='margin1'> {t("ARTICLES")}</h1>
        </div>
       <div className="artipage__content">
       <ArticalList articles={data} view={viewList}/>
       </div>

        </div>
    );
});

export default ArticlesPage;
