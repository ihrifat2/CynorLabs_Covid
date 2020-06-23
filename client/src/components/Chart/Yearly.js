import React from 'react';
import { Bar } from "react-chartjs-2";

function Yearly(props) {
    return (
        <div>
            <h1>Yearly</h1>
            <Bar
                data={{
                    labels: [65, 59, 90, 81, 56, 55],
                    datasets: [{
                        data: [60, 54, 79, 68, 69, 75],
                        label: 'Infected',
                        borderColor: 'rgb(116, 28, 176, 1)',
                        fill: true,
                    }, {
                        data: [65, 59, 90, 81, 56, 55],
                        label: 'Deaths',
                        borderColor: 'rgb(233, 30, 99)',
                        fill: true,
                    }],
                    backgroundColor: [
                        "rgba(255, 134,159,0.4)",
                        "rgba(98,  182, 239,0.4)",
                        "rgba(255, 218, 128,0.4)",
                        "rgba(113, 205, 205,0.4)",
                        "rgba(170, 128, 252,0.4)",
                        "rgba(255, 177, 101,0.4)"
                    ],
                    borderColor: [
                        "rgba(255, 134, 159, 1)",
                        "rgba(98,  182, 239, 1)",
                        "rgba(255, 218, 128, 1)",
                        "rgba(113, 205, 205, 1)",
                        "rgba(170, 128, 252, 1)",
                        "rgba(255, 177, 101, 1)"
                    ]
                }}
            />
        </div>
    );
}

export default Yearly;