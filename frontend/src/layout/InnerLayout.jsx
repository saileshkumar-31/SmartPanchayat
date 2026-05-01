import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import { Outlet } from "react-router-dom"
const InnerLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default InnerLayout
