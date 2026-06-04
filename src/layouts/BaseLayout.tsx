import { Outlet } from "react-router"
import Footer from "../components/common/Footer"

type LayoutProps = {
    header: React.ReactNode
}

const BaseLayout = ({ header }: LayoutProps) => {
    return (
        <>
            {/* {header}

            <main className="min-h-[90vh]">
                <Outlet />
            </main> */}

            <Footer />
        </>
    )
}

export default BaseLayout