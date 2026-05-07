import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import RestrictedGate from "../components/common/RestrictedGate"
import { Outlet } from "react-router-dom"
const InnerLayout = () => {
    return (
        <RestrictedGate>
            <Header/>
            <Outlet/>
            <Footer/>
        </RestrictedGate>
    )
}

export default InnerLayout
