import React,{useState} from 'react'

/**
* @author
* @function Dashboard
**/
import { CaseOverView } from './caseOverView';
import { DataFilter } from './dataFilters';
// import { SideNav } from './sideNav';
import { TopHeader } from '../layout/topHeader';
import HorizontalScrollGrid from './horizentalScrollGrid';
import { ChartContainer } from '../charts-grid/chartContainer';

import { Layout, Col, Row, Card } from 'antd';
const { Header, Content, Footer, } = Layout;
const Dashboard = (props) => {
    const [toggle,setToggle] = useState(false)
  return(
    <Layout>
      <Layout>
        <TopHeader setToggle={setToggle} />
        <Content
          style={{
            margin: '24px 16px 0',

          }}
        >
          <div>
            <Row gutter={[16, 16]}>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h2 className='headeingTextStyle'>Casees OverView</h2>
                <CaseOverView />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h2 className='headeingTextStyle'>Data Filters</h2>
                <DataFilter />
              </Col>
            </Row>

            <Card className='custom-shadow' style={{ marginTop: '20px', borderRadius: '15px' }}>
              <HorizontalScrollGrid />
            </Card>


            {/*  charts start from here */}
            <ChartContainer toggle={toggle} />

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ALL RIGHTS RESERVED BY EQARCOM ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
   )

 }

 export default Dashboard;