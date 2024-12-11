import Sidebar from "../sidebar/Sidebarr"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    Louane
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/louane-augsburger-995955340" target="_blank"><img src="/linkedin.png" alt="linkedin logo" /></a>
                </div>
            </div> 
        </div>
    )
}

export default Navbar