// import React from 'react'

// function Home() {
//   const user = "shubhanshu nayak"
//   let x=20;
//    let y=10;
//     let z=30;
//  function handlesubmit(){
//   alert("submission complete")
//  }
//     return (
//     <div>
//      <h1>{user}</h1>
//      <h2>{x+y+z}</h2>
//      <h2>{10+20-40}</h2>
//      <button onClick={()=>handlesubmit()}>submit</button>

//     </div>
//   )
// }

// export default Home
// import React from 'react'
// import logo from './image.jpeg';




// function Home() {
//   const name = "shubhanshu nayak"
//   const list1 = "Invent new trafic lights"
//   const list2 = "Rehearse a movie scene"
//   const list3 = "Imoprove the spectrum technology"
//   function handlesubmite() {
//     alert("hello shubhanshu")
//   }

//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src={logo} alt='logo'></img>
//       <ul>
//         <li>{list1}</li>
//         <li>{list2}</li>
//         <li>{list3}</li>
//       </ul>
//       <button onClick={ handlesubmite}>button</button>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate()
  const arr = [{ id:1, name: "shubhanshu" },
  { id:2, name: "arya" }, { id:3, name: "priyanka" },
  ]
  function handleNavigate() {
    navigate('contact', { state: arr })
  }
  return (
    <div>
      <button onClick={handleNavigate}>navigate into Contact page</button>
    </div>
  )
}

export default Home