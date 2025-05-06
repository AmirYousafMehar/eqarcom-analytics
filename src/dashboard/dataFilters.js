import React,{useState} from 'react';
import useIdle from '../hooks/detectIdelState';
import { Card , DatePicker, Col, Row,Button } from 'antd';
/**
* @author
* @function DataFilter
**/

export const DataFilter = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (status) => {
      setOpen(status);
      if (status) {
        setOpen(true)
      } else {
        setOpen(false)
      }
  };

  const isIdle = useIdle(5000); // Set idle timeout to 5 seconds for example



  return(
    <Card className='custom-shadow'  style={{borderRadius:'15px'}}>
       {
        // !isIdle ? 
        <Row  gutter={[16,0]}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
       
          <DatePicker     onOpenChange={handleOpenChange} placeholder='From 11/20/2022' style={{width:'100%',padding:'14px'}} />
           
       </Col>
       <Col xs={24} sm={24} md={12} lg={8} xl={8}>
       
       <DatePicker placeholder='To 11/20/2024' style={{width:'100%',padding:'14px'}}  />
         
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
       
     { <Button style={{width:'100%',background:open ? '#165f92' : '#165f92',color:open ? '#fff':'#fff',height:'55px'}} type="primary"  size={'large'}>
            APPLY
          </Button>}
         
      </Col>
        </Row>
        // :<h1>Idel</h1>
       }
    </Card>
   )

 }