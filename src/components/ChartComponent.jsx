
import { Pie } from 'react-chartjs-2';
import './Chat.css'
import { Chart as ChartJS, CategoryScale,ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale,ArcElement, BarElement, Title, Tooltip, Legend)
function ChartComponents(){
   const data ={
    labels:['Volvo','Nexon',"Punch","BMW",'AUDDI','Range Rover','Lambergni','Tesla',"forturner"],
    datasets:[
      {
        label:'Users Data',
        data:[12,10,14,15,20,18,16,12,10],
        backgroundColor: [
          'rgba(245,83,39,0.8)', 
          'rgba(54, 162, 235, 0.8)', 
          'rgba(255, 206, 86, 0.8)', 
          'rgba(75, 192, 192, 0.8)', 
          'rgba(153, 102, 255, 0.8)', 
          'rgba(255, 159, 64, 0.8)', 
          'rgba(255, 99, 132, 0.8)', 
          'rgba(54, 162, 235, 0.8)', 
          'rgba(75, 192, 192, 0.8)'
          
        ],  
          }
    ]
   }
   return (
    <div>
      <h1>Data Chat</h1>
      <Pie data={data}/>
      

    </div>
   );

}

export default ChartComponents;