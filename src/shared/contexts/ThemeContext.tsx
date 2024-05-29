import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../themes";

interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void
}
// 2 - criar a tipagem IThemeContextData: vai receber um themeName (nome dos 2 temas possíveis que quero: claro ou escuro), e um toggleTheme (uma função () => void), uma função em branco que inicialmente não faz nada.

const ThemeContext = createContext({} as IThemeContextData)
// 1 - criar um theme context, que receberá a tipagem de IThemeContextData, ou seja, ao chamar o contexto, poderemos usar o que possui em sua tipagem, nesse caso um themeName (string) que será 'light' ou 'dark' e um toggleTheme, uma função que poderá ser utilizada em um onclick de algum botão ou algo do tipo

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}
// 12 - criar uma função para retornar o ThemeContext que criamos. essa função será chamada nos componentes para utilizar o themeName e a função toggleTheme

interface IAppThemeProviderProps {
    children: React.ReactNode
} // 3.2 - criar uma interface IAppThemeProviderProps para o AppThemeProvider, que tem uma children com o tipo React.Reactnode

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
    // 3.1 - criar um provider do tema e uma interface para definir o children como reactnode
    
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
    // 7 - criar um estado para os temas, que vai receber a tipagem <'light' | 'dark'> e valor inicial 'light'

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])
    // 8 - criar um useCallback toggleTheme e dentro dele passar um setThemeName --> isso vai ter um oldTheme inicial, seja light ou dark. se for light, setar dark. se for dark, setar light

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme
        return DarkTheme
    }, [themeName])

    // 9 - criar um theme com useMemo ---> se themeName for light, retornar LightTheme, senão retornar DarkTheme (Temas que criamos em themes/Dark e themes/Light)

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        {/* 4 - retornar um ThemeContext.Provider e passar themeName e toggleName no value */}
            <ThemeProvider theme={theme}>
            {/* 6 - colocar o ThemeProvider do mui */}
            {/* 11 - colocar o theme criado com useMemo para o ThemeProvider do mui */}
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                {/* 10 - criar uma box com width e heigth e bgcolor padrão */}
                    {children}
                    {/* 5 - passar o {children} dentro do ThemeContext.Provider */}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
