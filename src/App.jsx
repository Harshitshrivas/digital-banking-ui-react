import React from 'react'
import Sectionn from './Components/Section1/Sectionn'

const App = () => {
  const users =[
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500', 
      intro: '',
      colour: 'blue',
      tag: 'Satisfied'
    },
     {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500', 
      intro: '',
      colour: 'blue',
      tag: 'Underserved'
    },
     {
      img: 'https://media.istockphoto.com/id/1352073805/photo/man-or-student-checking-quadcopter-or-drone-by-connecting-to-laptop-at-laboratory-concept-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=07Dnf7ASfVRwYQHS9x6duiqhW_Mi8ctKiAgae_xyvi0=', 
      intro: '',
      colour: 'lightseagreen',
      tag: 'Underbanked'
    } ,
    {
      img: 'https://media.istockphoto.com/id/1822184423/photo/young-business-person-using-computer-in-bank-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZoTqt65zUD5zdFFRzRaydksPJkP328eWC68ZFWBL89o=', 
      intro: '',
      colour: 'orangered',
      tag: 'Undercooked'
    } ,
    {
      img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500', 
      intro: '',
      colour: 'purple',
      tag: 'Unsatisfied'
    } 
  ]
  return (
    <div>
      <Sectionn users = {users}/>
    </div>
  )
}

export default App