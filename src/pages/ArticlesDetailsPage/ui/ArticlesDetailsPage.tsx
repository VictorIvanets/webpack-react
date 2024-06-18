import { useTheme } from "app/Providers/Theme/useTheme";
import { useTranslation } from "react-i18next";
import className from "shared/lib/helpers/classNames/classNames";
import ArticlesDetails from "../ArticlesDetailsComponents/ArticlesDetails";
import { useParams } from "react-router-dom";


export const ArticlesDetailsPage = () => {
    const {theme} = useTheme()
    const {t} = useTranslation()
    const {id} = useParams<{id: string}>()

    

    return (
        <div className={className('artidetapage', {artidetapagedark: (theme === "dark" ? true : false), artidetapageruby: (theme === "ruby" ? true : false)}, [])}>

        <ArticlesDetails id={id}/>
     
        </div>
    );
};

export default ArticlesDetailsPage;