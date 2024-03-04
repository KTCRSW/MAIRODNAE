import { useState } from 'react'
import KONLEG from './assets/KONLEG.png'
import './App.css'

function App() {

  const [topText, setTopText] = useState(['']);
  const [downText, setDownText] = useState([''])
  
  const [topValues, setTopValues] = useState('');
  const [downValues, setDownValues] = useState('');

  
  const DownChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setDownText(value);
    setDownValues(value);

  }

  const TopChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setTopValues(value);
    setTopText(value);
  }



  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', textShadow: '0px 0px 100px #000'  }}>
          <p className=' text-white text-center font-bold text-[32px] outline-3'>{topText}</p>
        </div>
        <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', textShadow: '0px 0px 100px #000'  }}>
          <p className=' text-white text-center font-bold text-[32px] outline-3'>{downText}</p>
        </div>
        <img src={KONLEG} alt="" />
        <div className="div">
          <p className='font-bold text-[22px]'>Text 1: </p>
          <input type="text" placeholder="ข้อความด้านบน" value={topValues} onChange={TopChange} className="mt-2 shadow appearance-none bg-dark rounded w-[100%] py-3 px-3 text-dark focus:outline-none focus:shadow-outline" />
        </div>
        <div className="div">
          <p className='font-bold text-[22px]'>Text 2: </p>
          <input type="text" placeholder="ข้อความด้านล่าง" value={downValues} onChange={DownChange} className="mt-2 shadow appearance-none bg-dark rounded w-[100%] py-3 px-3 text-dark focus:outline-none focus:shadow-outline" />
        </div>
        <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-full'>ตกลง</button>
      </div>
      
    </>
  )
}

export default App
