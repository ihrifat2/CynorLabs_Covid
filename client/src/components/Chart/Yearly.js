import React, { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2";
import moment from 'moment'

function Yearly(props) {
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
        totalDayName.push(moment(post.date).format('YYYY'))
    }).length

    var sliceDupYear = [];
    totalDayName.forEach(x=>{
        sliceDupYear[x]=(sliceDupYear[x] || 0)+1 
    });

    const dailyDayCount = Object.keys(sliceDupYear)
    const dailyDayName = Object.values(sliceDupYear)
    return (
        <div>
            <h1>Yearly</h1>
            {
                loading ?
                'Loading ...' :
                <Bar
                    data={{
                        labels: dailyDayCount,
                        datasets: [{
                            data: dailyDayName,
                            label: 'Yearly Report',
                            backgroundColor: 'rgba(84, 3, 3, 0.2)',
                            borderColor: 'rgba(84, 3, 3, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(84, 3, 3, 0.4)',
                            hoverBorderColor: 'rgba(84, 3, 3, 1)',
                            fill: true,
                        }],
                    }}
                />
            }
            
        </div>
    );
}

export default Yearly;