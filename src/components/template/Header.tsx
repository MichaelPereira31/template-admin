import useAppData from "@/data/hook/useAppData";
import AlternativeTheme from "./AlternativeTheme";
import Title from "./Title";

interface HeaderProps {
  title: string;
  caption: string;
}
export default function Header(props: HeaderProps){
  const {theme, switchTheme} = useAppData()
  return (
    <div className={`flex`}>
      <Title title={props.title} caption={props.caption}/>
      <div className={`flex flex-grow justify-end`}>
        <AlternativeTheme theme={theme} switchTheme={switchTheme}/>
      </div>
    </div>
  )
}