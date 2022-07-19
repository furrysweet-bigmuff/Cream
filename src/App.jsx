import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import MainContainer from './components/MainContainer.jsx'
import './style/app.sass'

const App = () => {
  return ( 
    <div className="main-wrapper">
      <Sidebar></Sidebar>
      <MainContainer></MainContainer>
    </div>
   );
}
 
export default App;