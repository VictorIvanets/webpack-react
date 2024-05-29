import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function NotFound (){
    
    const {t} = useTranslation()
    
    return <div className="notfound">
            <h1>{t("404")}</h1>
                <h3 className="tacenter">
                    <Link to = "/" >{t("наголовну")}</Link>
                </h3>
            </div>
     
    
    
}
