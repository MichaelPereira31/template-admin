import { IconMoon, IconSun } from "../icons"

interface AlternativeThemePros{
  theme: string
  switchTheme: () => void
}
export default function AlternativeTheme(props: AlternativeThemePros){
  return props.theme === 'dark' ? (
    <div onClick={props.switchTheme} className={`
      hidden sm:flex items-center justify-start cursor-pointer
      bg-gradient-to-r from-yellow-300 to-yellow-600
      w-24 h-8 p-1 rounded-full
    `}>
      <div className={`
      flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>
        {IconSun(4)}
      </div>
      <div className={`
      hidden lg:flex items-center ml-2 text-white`}>
        <span>Light</span>
      </div>
    </div>
  ): (
    <div onClick={props.switchTheme} className={`
      hidden sm:flex items-center justify-end cursor-pointer
      bg-gradient-to-r from-gray-500 to-gray-900
      w-24 h-8 p-1 rounded-full
    `}>
      <div className={`
      hidden lg:flex items-center mr-2 text-gray-300`}>
        <span>Dark</span>
      </div>
      <div className={`
      flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}>
        {IconMoon(4)}
      </div>
      
    </div>
  )
}