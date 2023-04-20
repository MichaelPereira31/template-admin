import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, createContext, useState } from "react";

type Theme = 'dark' | 'light';

interface AppContextProps {
  theme: Theme,
  switchTheme: () => void
}
const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }){
  const [theme, setTheme] = useState<Theme>('light')

  function switchTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <AppContext.Provider value={{
      theme,
      switchTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
export const AppConsumer = AppContext.Consumer