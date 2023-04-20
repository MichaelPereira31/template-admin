import Layout from "@/components/template/Layout";
// import { AppConsumer } from "@/data/context/AppContext";
import useAppData from "@/data/hook/useAppData";

export default function Notifications() {
  const {switchTheme} = useAppData()

  return (
    <Layout title="Notifications" caption="Hello!">
      {/* <AppConsumer>
        {data => <h3>{data.name}</h3>}
      </AppConsumer> */}

      <button onClick={switchTheme}>Switch Theme</button>
    </Layout>
  )
}
