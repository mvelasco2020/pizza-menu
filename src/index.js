import React from "react"
import ReactDom from "react-dom/client"
import Header from "./Components/header";
import Footer from "./Components/footer";
import Menu from "./Components/menu";

function App() {
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>)
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>
)
