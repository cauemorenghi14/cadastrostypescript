import { createContext, useCallback, useContext, useState } from "react"

interface IAppDrawerContextProps {
    children: React.ReactNode
}

interface IDrawerContextProps {
    isDrawerOpen: boolean
    toggleDrawerOpen: () => void
}

const DrawerContext = createContext({} as IDrawerContextProps)

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider = ({ children }: IAppDrawerContextProps) => {

    const [isDrawerOpen, setisDrawerOpen] = useState(false);
    
    const toggleDrawerOpen = useCallback(() => {
        setisDrawerOpen(drawerSituation => !drawerSituation)
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}