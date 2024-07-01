import { useTheme } from "app/Providers/Theme/useTheme";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import { Article, ArticleView } from "../articleTypes/articleTypes";
import { useEffect, memo, useRef, MutableRefObject} from "react";
import { PreLoaderGradient } from "widgets/PreLoader/ui/PreloaderGradient";
import ArticalListItem from "./ArticalListItem";
import Button from "widgets/Button/Button";
import { PreLoaderGradientBox90deg } from "widgets/PreLoader/ui/PreloaderGradientBoxSize";


export interface ArticalListProps{
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    allArt?: boolean
    addArticles?: () => void
}


export const ArticalList = memo(({articles, isLoading, view, addArticles, allArt}: ArticalListProps) => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    const ref1 = useRef(null);
    const ref2 = useRef(null);


    const scrollDown = (r1: MutableRefObject<HTMLElement>, r2: MutableRefObject<HTMLElement>)=>{
        if  (articles && articles.length > 3) {
            r2.current.scrollIntoView({
                behavior: 'smooth'
              });
        } else {
            r1.current.scrollIntoView();
        }
        
    }
  

    useEffect(() => {
        const r1 = ref1
        const r2 = ref2
        if (r1 && r2) {
            scrollDown(r1, r2)
        }
       
        // setTimeout(()=>{
        //     scrollDown(r1, r2)
        // }, 400)
    }, [articles]);




    const scrollUp = ()=>{
            ref1.current.scrollIntoView({
                behavior: 'smooth'
            })
    }


    const renderArticle = (article: Article)=> {
        return (
            <ArticalListItem key={article.id} article = {article} view={view}/>
            )
    }


  
    return (
        <div 
        className={className('ArticalList', {ArticalListdark: (theme === "dark" ? true : false), ArticalListruby: (theme === "ruby" ? true : false)}, [])}>
            <div ref={ref1}></div>
            {articles ? articles.map(renderArticle) : <PreLoaderGradient/>}
            
            <div className="ArticalList__down">
            {
            isLoading ? <PreLoaderGradientBox90deg/> : 
            <>
            <Button onClick={scrollUp} className='btnnext'>UP</Button>
            {allArt ? <h3>більше нічого немає</h3> : ''}
            <Button onClick={addArticles} className='btnnext'>NEXT</Button>
            </>
            }
            </div>
            <div ref={ref2}></div>
            
        </div>
    );
});

export default ArticalList;
