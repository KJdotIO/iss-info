import './App.css';
import { React, useState, useEffect } from 'react';
import Card from './Card';


import { FaArrowDown } from 'react-icons/fa';

function App() {
  var today = new Date();
  var formattedDate = today.toLocaleDateString("en-GB");
  console.log(formattedDate);


  const [issData, setissData] = useState([])
  const [miles, setMiles] = useState(0)

  
  const toMiles = (velocity) => {
    return(
      velocity * 0.621371
    )
  }

  
  // useEffect(() => {
  //   let intervalId;
    
  //   const fetchData = () => {
  //     fetch('https://api.wheretheiss.at/v1/satellites/25544')
  //     .then(response => response.json())
  //     .then(data => {
  //       toMiles()
  //       setissData(data)

  //       const miles = toMiles(data.velocity)
  //       setMiles(miles)
  //     })
  //   }

  //   fetchData();

  //   intervalId = setInterval(fetchData, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   }
  // }, [miles]);


  return (
    <>
    <div className='bg-[#1f1f1f] min-h-screen text-white flex flex-col justify-center items-center'>
      
      <h1 className='my-[40px] mx-[30px] text-5xl text-center font-semibold'>International Space <br /> Station info.</h1>
      <Card
      name={issData.name}
       latitude={issData.latitude}
       longitude={issData.longitude}
       velocity={Math.floor(miles)}
       visibility={issData.visibility}  
       date={formattedDate}
       units={'miles'}
       />
        
        <div><FaArrowDown className=' text-5xl mt-[20px]' /></div>

        <footer className='p-[20px] text-center'>
          <h1 className=''>This was built using <a href='https://wheretheiss.at/w/developer' className=' text-blue-400'>This API</a>.</h1>
          <h1 className=''>The FETCH method is updated every 5 seconds because otherwise it throws a fit and throws a 429 error.</h1>
        </footer>
    </div>
    </>
  );
}

export default App;
