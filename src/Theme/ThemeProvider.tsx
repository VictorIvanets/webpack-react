import { FC, ReactNode, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
type ContextProviderProps = {
    children?: ReactNode
}


const ThemeProvider = ({ children }: ContextProviderProps) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)
  

    const defaulProps = useMemo(()=>({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaulProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider