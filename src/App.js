import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';



import './App.css';

export const App = () => {
  return(
    <BrowserRouter>
      <div className='flex relative dark: bg-main-dark-bg'>
        <div className='fixed right-4 button-4' style={{zIndex:'1000'}}>
          <TooltipComponent content="Settings" position='Top'>
            <button
              type='button'
              className='text-3xl p-3 hover:drop-shadow hover:bg-light-gray text-white'
              style={{background: 'blue',borderRadius: '50%'}}
            
            >
              <FiSettings/>
            </button>
          </TooltipComponent>
        </div>
      </div>

    </BrowserRouter>
  );
};