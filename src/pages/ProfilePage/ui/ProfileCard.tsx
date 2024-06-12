import { StateSchema } from "app/Providers/StoreProvider/config/StateSchema"
import { useTheme } from "app/Providers/Theme/useTheme"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { className } from "shared/lib/helpers/classNames/classNames"
import { profileReduser } from "../Profileconfig/ProfileSlice"
import { AppThunkDispatchLogin } from "shared/lib/helpers/AppDispatch/AppDispath"
import { ProfileProps } from "../Profileconfig/Profiletype"
import Button from "widgets/Button/Button"
import { PreLoader } from "widgets/PreLoader"
import { Input } from "widgets/Input"
// import { fetchProfileData } from "../Profileconfig/fetchProfileData"



export function ProfileCard(){

    const {theme} = useTheme()
    const {t} = useTranslation()
    const dispatch = useDispatch<AppThunkDispatchLogin>();
    const data = useSelector((state: StateSchema) => state?.profile?.data || '')
    const isLoading = useSelector((state: StateSchema) => state?.profile?.isLoading || '')
    const error = useSelector((state: StateSchema) => state?.profile?.error || '')



    return (<div className="profilecardbox">
        { data ? 
        <div className={className('profilecard', {profilecarddarks: (theme === "dark" ? true : false)}, [])}>
            
            
            <div className="profilecard__info">
            <img className="profilecard__foto" src={data.avatar} alt="" />
            <div className="profilecard__info__text">
                <h2 className="mb1">Ім'я: {data.first}</h2>
                <h2 className="mb1">Прізвище: {data.lastname}</h2>
                <h2 className="mb1">Країна: {data.country}</h2>
                <h2 className="mb1">Місто: {data.city}</h2>
                <h2 className="mb1">Вік: {data.age} років</h2>
            </div>
 
            </div>


            <div className="profilecard__data">
                    <Input
                    value={data?.first}
                    placeholder="Ім'я"
                    className="profilecard__data__input"
                    />
                    <Input
                    value={data?.lastname}
                    placeholder="Призвіще"
                    className="profilecard__data__input"
                    />  
                    <Button className="profilecard__btn">Редагувати</Button>
                  
            </div>
            </div> 
                
        : <PreLoader/>}



       
</div>
)
   }

   export default ProfileCard