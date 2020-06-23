import React, { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import moment from 'moment'

function Daily(props) {
    const [loading, setloading] = useState(false)

    const [userData, setUserData] = useState([])
    useEffect(() => {
        const getData = () => {
            setloading(true)
            fetch('/api/posts')
                .then(res => res.json())
                .then(res => {
                    setloading(false)
                    setUserData(res)
                })
        }
        getData();
    }, [])
    const date = moment().format();
    // console.log(date)
    // console.log(date.format('dddd'))
    // const todayReport = userData.filter(
    //     (ud) = !moment(ud.date).isBefore(moment(), "day")
    // ).length;

    const dailyDayName = [];
    const dailyDayCount = [];
    const i = 0;
    const dayCount = '';
    const dailyReport = userData.filter(function (post) {
        // console.log()
        // moment(post.date).isBefore(moment(), "day")
        dailyDayName.push(moment(post.date).format('dddd'));
        // dailyDayCount.push(moment(post.date).format('dddd'));
        var a = moment(post.date).subtract(1, 'day');
        var b = moment(post.date).add(1, 'day');
        
        // dailyDayCount.push(moment.max(a, b));
        dailyDayCount.push(moment(post.date).add(1, 'd'));
        // console.log()
    }).length;

    // const dateArray = [];
    // userData.map((post) => {
    //     dateArray.push(post.date);
    // });

    // console.log(dailyDayName)
    console.log(dailyDayCount)
    // console.log(dailyReport)

    return (
        <div>
            <h1>Daily</h1>
            <Line
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

export default Daily;