import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './companents/counter';

function App() {
  return (
    <div className='bg-gray-100 h-[100vh] py-32'>
      <div className='bg-white rounded-xl shadow-lg flex flex-col justify-center mx-80'>
        <div className='bg-[#2eca7f] w-full rounded-t-xl h-80 flex justify-center text-2xl text-red-400 font-bold'>
          <Counter />
        </div>
        <div className='w-full rounded-b-xl h-80'>
          Hello
        </div>
      </div>
    </div>
  );
}

export default App;
