import React from 'react';
import { CustomChart } from './customeChart';
import { EchartComponent } from './echartComp';
import { RatingComponent } from '../dashboard/ratingComponent';
import { 
  pieOptions
  ,lineOptions,
  braOptions ,
  columnOptions,
  donutOptions,
  ElineOptions,
  eDountoption,
  getOption,
  getHorizontalOption,
  getPieOption
} from '../fakeData';
import { Layout, Col, Row, Card } from 'antd';
import ReactECharts from 'echarts-for-react';
/**
* @author
* @function ChartContainer
**/

export const ChartContainer = ({toggle}) => {
  return (
 
    <Row gutter={[24, 16]} style={{marginTop: '20px'}}>

      <Col xs={24} sm={12} md={8} lg={14} xl={14}>
     {!toggle &&  <CustomChart options={lineOptions}/>}
   {  toggle &&  <EchartComponent options={ElineOptions} />}
      </Col>
      <Col xs={24} sm={12} md={8} lg={10} xl={10}>
    { !toggle &&  <CustomChart options={pieOptions}/>}
    {  toggle &&  <EchartComponent options={getPieOption()} />}
      </Col>
      <Col xs={24} sm={12} md={8} lg={14} xl={14}>
      {!toggle && <CustomChart options={columnOptions}/>}
      {toggle && <EchartComponent options={getOption()}/>}
      </Col>
      <Col xs={24} sm={12} md={8} lg={10} xl={10}>
      {!toggle && <CustomChart options={donutOptions}/>}
      {  toggle &&  <EchartComponent options={eDountoption} />}
      </Col>
      <Col xs={24} sm={12} md={8} lg={14} xl={14}>
    {
      !toggle &&    <CustomChart options={braOptions}/>
    }
       {  toggle &&  <EchartComponent options={getHorizontalOption()} />}
      </Col>
      <Col xs={24} sm={12} md={8} lg={10} xl={10}>
      <RatingComponent />
      </Col>
    </Row>
  )

}