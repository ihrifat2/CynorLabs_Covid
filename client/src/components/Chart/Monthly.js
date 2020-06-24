import React, { useState, useEffect } from 'react'
import { Doughnut } from "react-chartjs-2";
import moment from 'moment'

function Monthly(props) {
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
        getData()
    }, [])
    
    const totalDayName = []
    const dailyNameReport = userData.filter(function (post) {
        totalDayName.push(moment(post.date).format('MMMM'))
    }).length

    var sliceDupMonth = [];
    totalDayName.forEach(x=>{
        sliceDupMonth[x]=(sliceDupMonth[x] || 0)+1 
    });

    const dailyDayCount = Object.keys(sliceDupMonth)
    const dailyDayName = Object.values(sliceDupMonth)
    return (
        <div>
            <h1>Monthly</h1>
            {
                loading ?
                'Loading ...' :
                <Doughnut
                    data={{
                        labels: dailyDayCount,
                        datasets: [{
                            data: dailyDayName,
                            label: 'Monthly Report',
                            borderColor: 'rgb(144, 153, 5)',
                            hoverBackgroundColor: 'rgba(144, 153, 5, 0.4)',
                            hoverBorderColor: 'rgba(144, 153, 5, 1)',
                            fill: true,
                        }],
                    }}
                />
            }
        </div>
    );
}

export default Monthly;