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
    
    const totalYearName = []
    const yearlyReport = userData.filter(function (post) {
        totalYearName.push(moment(post.date).format('YYYY'))
        return 0;
    }).length

    var sliceDupYear = [];
    totalYearName.forEach(x=>{
        sliceDupYear[x]=(sliceDupYear[x] || 0)+1 
    });

    const yearlyDayCount = Object.keys(sliceDupYear)
    const yearlyDayName = Object.values(sliceDupYear)
    return (
        <div>
            <h1>Yearly</h1>
            {
                loading ?
                'Loading ...' :
                <Bar
                    data={{
                        labels: yearlyDayCount,
                        datasets: [{
                            data: yearlyDayName,
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