import Header from "../components/common/Header"
import BaseLayout from "./BaseLayout"

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <BaseLayout header={<Header />} />
    )
}

export default MainLayout