import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen grid-areas-[header_main_footer] bg-paper-dark overflow-x-hidden">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default Layout;