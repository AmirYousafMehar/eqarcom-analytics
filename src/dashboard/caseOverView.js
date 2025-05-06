import React from 'react'
import { Layout, Card , theme, Col, Divider, Row } from 'antd';
/**
* @author
* @function CaseOverView
**/

export const CaseOverView = (props) => {

 
  return(
    <Card className='custom-shadow'  style={{borderRadius:'15px'}}>
        <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div 
        style={{ 
            backgroundColor:'#f8f8f8', 
            borderRadius:'15px',
            border:'.5px solid #e8e8e8',
     
           
         }}
      
            >
             <h3 className='overCasesText'>Commercial</h3>
            </div>
       </Col>
       <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div 
        style={{
            backgroundColor:'#f8f8f8' , 
            borderRadius:'15px',
            border:'.5px solid #e8e8e8',
      
             }}

             
        >
            <h3 className='overCasesText'>Residentials</h3>
            </div>
       </Col>
     </Row>
    </Card>
   )

 }