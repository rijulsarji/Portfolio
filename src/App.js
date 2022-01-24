import HomeRoute from "./HomeRoute";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Form from "./Pages/Form";

function App() {

    const location = useLocation();

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomeRoute />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App;