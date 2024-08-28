import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactToPrint from "react-to-print";
import { ComponentToPrint, PrintView } from "./print-view";

function App() {
    const componentRef = useRef(null);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ReactToPrint
                    trigger={() => <a href="#">点此打印</a>}
                    content={() => componentRef.current}
                />
                {/* <PrintView ref={componentRef} /> */}
                <ComponentToPrint ref={componentRef} />

                {/* <div ref={componentRef}>My cool content here!</div> */}
            </header>
        </div>
    );
}

export default App;
