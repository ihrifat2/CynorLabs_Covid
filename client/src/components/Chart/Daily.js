import React, { useState, useEffect } from 'react'
import { Line } from "react-chartjs-2"
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
        getData()
    }, [])
    
    const totalDayName = []
    const dailyNameReport = userData.filter(function (post) {
        totalDayName.push(moment(post.date).format('DD-MM-YYYY'))
    }).length

    var sliceDupDay = [];
    totalDayName.forEach(x=>{
        sliceDupDay[x]=(sliceDupDay[x] || 0)+1 
    });

    const dailyDayCount = Object.keys(sliceDupDay)
    const dailyDayName = Object.values(sliceDupDay)

    return (
        <div>
            <h1>Daily</h1>
            {
                loading ?
                'Loading ...' :
                <Line
                    data={{
                        labels: dailyDayCount,
                        datasets: [{
                            data: dailyDayName,
                            label: 'Daily Report',
                            borderColor: 'rgb(95, 106, 244)',
                            hoverBackgroundColor: 'rgba(95, 106, 244, 0.4)',
                            hoverBorderColor: 'rgba(95, 106, 244, 1)',
                            fill: true,
                        }],
                    }}
                />
            }
        </div>
    )
}

export default Daily