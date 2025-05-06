import React from 'react'
import { Card, Flex, Progress, Rate, Row, Col } from 'antd'
/**
* @author
* @function RatingComponent
**/



export const RatingComponent = (props) => {
    const formatValue = (value) => `(${value})`;
    return (
        <Card className='custom-shadow' style={{overflow:'auto'}} >
            <div className='caseRating' style={{marginTop:'10px'}}>Case Rating</div>


            <Row gutter={[0,24]} style={{height:'364px'}} align="middle">

                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                    <Flex gap="large" vertical justify='center'>
                        <Rate allow defaultValue={5} />
                        <Rate allowHalf defaultValue={4} />
                        <Rate allowHalf defaultValue={3} />
                        <Rate allowHalf defaultValue={2.5} />
                        <Rate allowHalf defaultValue={2} />
                        <Rate allowHalf defaultValue={1} />
                    </Flex>
                </Col>
                <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                    <Flex gap="large" vertical justify='center' align='center'>

                        <Progress strokeColor={'#C70C81'} percent={90}  format={formatValue}/>
                        <Progress  strokeColor={'#FFB400'} percent={75}  format={formatValue}  status="active" />
                        <Progress  strokeColor={'#8CA770'} percent={70}  format={formatValue} status="active" />
                        <Progress strokeColor={'#590696'} percent={60}  format={formatValue} />
                        <Progress  strokeColor={'#733D31'} percent={40}  format={formatValue} />
                        <Progress  strokeColor={'#FFB400'} percent={20}  format={formatValue} />
                    </Flex>
                </Col>


            </Row>




        </Card>

    )

}