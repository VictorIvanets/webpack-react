import { memo } from "react";
import { useTranslation } from "react-i18next"
import Eng from 'shared/assets/eng.svg'
import Ukr from 'shared/assets/ukr.svg'
import { className } from "shared/lib/helpers/classNames/classNames";
import { Button } from "widgets/Button/Button";


export const LangSwitch = memo(() =>{
    const { t, i18n } = useTranslation();

const toggleLeng = ()=>{
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')

}

    return <div className="ENG">
        <Button 
        className= {className('headerbtn', {}, [])}
        onClick={toggleLeng}>
            {i18n.language === 'ua' ? <div className='svgbox'><Ukr className='svg'/></div> : <div className='svgbox'><Eng className='svg'/></div>} 
        </Button>
        </div>
})