import { HiOutlineViewGridAdd } from "react-icons/hi"
import "./style.css"
import { Link } from "react-router-dom"
const LogoName = () => {
  return (
        <Link to={"/dashboard"} className="logoName">
            <HiOutlineViewGridAdd />
            <h1>QuickDesk</h1>
        </Link>
  )
}

export default LogoName