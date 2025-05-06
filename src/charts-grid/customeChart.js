import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Card } from 'antd';

/**
* @author
* @function CustomChart
**/

export const CustomChart = ({options}) => {

   
    
  return(
   <Card className='custom-shadow'>
     <div>
     <HighchartsReact highcharts={Highcharts} options={options} />
     </div>
   </Card>
   )

 }