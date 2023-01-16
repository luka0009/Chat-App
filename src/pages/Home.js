import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import Register from './Register';

export default function Home() {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
};
