import React from 'react';
import { Doughnut } from "react-chartjs-2";

function Monthly(props) {
    return (
        <div>
            <h1>Monthly</h1>
            <Doughnut
                data={{
                    labels: [65, 59, 90, 81, 56, 55, 40],
                    datasets: [{
                        data: [60, 54, 79, 68, 69, 75, 20],
                        label: 'Infected',
                        borderColor: 'rgb(116, 28, 176, 1)',
                        fill: true,
                    }],
                }}
            />
        </div>
    );
}

export default Monthly;