import { useTheme } from "app/Providers/Theme/useTheme";
import ArticlesDetails from "pages/ArticlesDetailsPage/ArticlesDetailsComponents/ArticlesDetails";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import className from "shared/lib/helpers/classNames/classNames";

export const ArticlesPage = () => {
    const {theme} = useTheme()
    const {t} = useTranslation()





    return (
        <div className={className('artipage', {artipagedark: (theme === "dark" ? true : false), artipageruby: (theme === "ruby" ? true : false)}, [])}>

        <div className={className('artipage__header', {artipagedark__header: (theme === "dark" ? true : false), artipageruby__header: (theme === "ruby" ? true : false)},  [])}>
            <h1 className='margin1'> {t("ARTICLES")}</h1>
        </div>
        <NavLink className="margin1" to="/article_datails/1">ДжаваСкріпт</NavLink>
        <NavLink className="margin1" to="/article_datails/2">Пітон</NavLink>

        </div>
    );
};

export default ArticlesPage;



// const {theme} = useTheme()
// const {t} = useTranslation()
// const dispatchLogin = useDispatch<AppThunkDispatchLogin>();
// const dispatch = useDispatch()
// const dataForm = useSelector((state: StateSchema) => state?.profile?.form || undefined)
// const isLoading = useSelector((state: StateSchema) => state?.profile?.isLoading || undefined)
// const error = useSelector((state: StateSchema) => state?.profile?.error || undefined)
// const readonly = useSelector((state: StateSchema) => state?.profile?.readonly || false)
// const authData = useSelector((state: StateSchema) => state.user.authData)