import React from 'react'
import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
/**
* @author
* @function EchartComponent
**/

export const EchartComponent =React.memo(
    ({options}) => {
        return(
          <Card className='custom-shadow'>
          <div>
          <ReactECharts  opts={{ renderer: 'canvas' }} option={options}   style={{ height: '400px', width: '100%' }}  />
          </div>
        </Card>
         )
      
       }
) 