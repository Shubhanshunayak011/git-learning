// import React from 'react'
// import {Card,Form,Input,Button,Radio} from 'antd'
// import './Contact.css'

// function Contact() {
//   function handlesubmit(value){
//     console.log(value)
//   }
//   return (
//     <div>
//       <Card hoverable className='Contact_card'>
//         <h1>SCHOOL ADMISSION FORM</h1>
//         <Form  className='main_form' onFinish={handlesubmit} >
//           <div className='input_flex'>
//           <Form.Item label="First Name" name="FirstName">
//             <Input placeholder="Enter Your First Name" className='input_size' />
//           </Form.Item>
//           <Form.Item label="Last Name" name="LastName">
//             <Input placeholder="Enter Your Last Name" className='input_size' />
//           </Form.Item>
//           </div>
//           <div className='input_flex'>
//           <Form.Item label="Father Name" name="fatherName">
//             <Input placeholder="Enter Your Father Name" className='input_size' />
//           </Form.Item>
//           <Form.Item label="Mother Name" name="motherName">
//             <Input placeholder="Enter Your Mother Name" className='input_size' />
//           </Form.Item>
//           </div>
//           <Form.Item label="DATE OF BIRTH" name="DOB">
//             <Input placeholder="DATE OF BIRTH" type="date" />
//           </Form.Item>
//           <Form.Item label="ADDRESS" name="address">
//             <Input placeholder="Enter Your Address"  />
//           </Form.Item>
//           <div className='input_flex'>
//           <Form.Item label="CITY" name="city">
//             <Input placeholder="Enter Your City Name"  />
//           </Form.Item>
//             <Form.Item label="STATE" name="state">
//             <Input placeholder="Enter Your State Name"  />
//           </Form.Item>
//           <Form.Item label="GENDER" name='gender'>
//           <Radio.Group >
//             <Radio value="Male">MALE</Radio>
//              <Radio value="Female">FEMALE</Radio>
//               <Radio value="others">OTHERS</Radio>
//           </Radio.Group>
//           </Form.Item>
//           </div>
//           <Button htmlType="submit">Submit Form</Button>



//         </Form>

//       </Card>

//     </div>
//   )
// }

// export default Contact

import React from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
  const location = useLocation()
  console.log(location.state)
  return (
    <div>
      {
        location.state.map(i => (
          <div>
             <h1>{i.id}</h1>
               <h2>{i.name}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Contact