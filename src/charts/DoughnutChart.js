import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

ChartJS.register()

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const DoughnutChart = () => {
  return (
    <>
    <h1>DoughnutChart</h1>
    <div style={{
      width: "75vw",
      height: "75vh",
      margin: 'center',
      border: '5px solid red',
      position: 'sticky',
      top: 0,
      background: 'white',
      display:'flex',
      justifyContent: 'center',
    }}>
      <Doughnut data={data}/>
    </div>
    
    </>
    
  )
}

export default DoughnutChart