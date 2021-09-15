import Header from "./Header";
import Footer from "./Footer";
import SelectFruits from "./SelectFruits";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="app-container">
        <SelectFruits />
      </div>
      <Footer />
    </div>
  )
}

export default Layout;