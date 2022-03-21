import Plot from "react-plotly.js";
import "./App.css";
import { getFormattedData } from "./helper"; // get the specific method from helper
import React, { useState, useEffect } from "react";

function App() {
    const config = {
        displayModeBar: false, // visibility of the display bar in the top right corner
        autosizable: true, // will auto fit the screen
        responsive: true, // will response to screen size
        staticPlot: true, // will make the graph non interactive
    };

    const layout = {
        showlegend: true, // visibility of the legend
        //position of the legend
        legend: {
            x: 1,
            y: 1,
            title: {
                text: "Countries:",
            },
        },
        // properties for the x axis
        xaxis: {
            title: "ID Year",
            titlefont: {
                family: "Arial, sans-serif",
                size: 15,
                color: "black",
            },
        },
        // properties for the y axis
        yaxis: {
            title: "Population",
            titlefont: {
                family: "Arial, sans-serif",
                size: 15,
                color: "black",
            },
        },
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            setData(await getFormattedData()); // call the function and save the output inside the const
        };
        getData();
    }, []);

    return (
        <div className="App">
            <Plot className="main-plot" {...{ data, config, layout }} />
        </div>
    );
}
export default App;
