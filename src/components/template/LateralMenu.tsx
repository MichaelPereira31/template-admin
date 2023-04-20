import { IconBell, IconHome, IconLogout, IconSettings } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./logo";

export default function LateralMenu(){
  return (
    <aside className={`flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 `}>
      <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 w-20 h-20`}>
        <Logo/>
      </div>
      <ul className={`flex-grow`}>
        <ItemMenu url="/" text="Home" icon={IconHome}/>
        <ItemMenu url="/settings" text="Setting" icon={IconSettings}/>
        <ItemMenu url="/notifications" text="Notifications" icon={IconBell}/>
      </ul>
      <ul>
        <ItemMenu text="Logout" icon={IconLogout} className={`text-red-600 dark:text-red-400 hover:bg-red-400 dark:hover:text-white hover:text-white`} onClick={() => {
          console.log("Logged out")
        }}/>
      </ul>
    </aside>
  )
}