import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// import App from './ReactPc/App'
// import Props1 from './ReactPc/Props1.jsx'
// import Map from './ReactPc/Map.jsx'
// import Filter from './ReactPc/Filter.jsx'
// import Event from './ReactPc/Event.jsx'
// import UserState from './ReactPc/UserState'
// import Effec from './ReactPc/Effec.jsx'
// import Timer from './ReactPc/Timer'
// import Class from './ReactPc/Class.jsx' 
// import UseMemo from './ReactPc/UseMemo' 
import UseCallback from './ReactPc/useCallback'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Props1 /> */}
    {/* <Map /> */}
    {/* <Filter/> */}
    {/* <Event /> */}
    {/* <UserState/> */}
    {/* <Effec /> */}
    {/* <Timer /> */}
    {/* <Class /> */}
    {/* <UseMemo /> */}
    <UseCallback />
  </StrictMode>
)
