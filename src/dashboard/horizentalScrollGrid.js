import React, { useRef } from 'react';
import { dashboardCards } from '../fakeData';
import { Row, Col, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './HorizontalScrollGrid.css';

const HorizontalScrollGrid = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            left: -600, // Adjust scroll distance
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            left: 600, // Adjust scroll distance
            behavior: 'smooth',
        });
    };

    return (
        <div style={{ position: 'relative' }}>
            <Button
            
                icon={<LeftOutlined style={{color:'white',fontWeight:'bolder'}} />}
                onClick={scrollLeft}
                style={{background:'#21405c', position: 'absolute', left: -5, top: '50%', transform: 'translateY(-50%)', zIndex: 999 }}
            />
            <div className="scroll-container" ref={scrollContainerRef}>
                <Row wrap={false}>
                    {dashboardCards.map((item, index) => {
                        const key = `col-${index}`;
                        return (
                            <Col
                                style={{ color: item?.color, background: item?.background_color, padding: '10px', margin: '5px', minHeight: item?.min_height, borderRadius: '15px' }}
                                key={key}
                                xs={{ flex: '100%' }}
                                sm={{ flex: '50%' }}
                                md={{ flex: '50%' }}
                                lg={{ flex: '20%' }}
                                xl={{ flex: '20%' }}

                            >

                                <div
                                    style={{
                                        color: item?.color,
                                        background: item?.background_color,
                                        padding: '15px',
                                        minHeight: item?.min_height,
                                        width: '300px',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        // alignItems: 'center',
                                    }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>



                                        <div style={{ display: 'flex', marginBottom: '10px' }}>
                                            <div>{item?.icon}</div>
                                            <div className='scrollCard'> {item?.title}</div>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div className='scrollCardCurrentValue'>  Current Value  <span className='valueOfCard' style={{ display: 'block' }}>{item?.value}</span></div>
                                            <div className='charImageOnCard'><img src='/images/chartIcon.png'></img></div>

                                        </div>
                                    </div>
                                   
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <Button
           
                icon={<RightOutlined  style={{color:'white',fontWeight:'bolder'}}/>}
                onClick={scrollRight}
                style={{background:'#21405c', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
            />
        </div>
    );
};

export default HorizontalScrollGrid;
