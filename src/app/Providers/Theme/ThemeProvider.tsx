import { FC, ReactNode, useMemo, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
type ContextProviderProps = {
    children?: ReactNode
}

interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode
}


const ThemeProvider: FC<ThemeProviderProps> = (props) => {

    const {
        initialTheme,
        children
    } = props

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  

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