import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/navbar/Nav'
import Documentation from './pages/Documentation'
import Tracks from './pages/Tracks'
import Map from './pages/Map'
import Profiles from './pages/Profiles'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import UserProfile from './pages/UserProfile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}>
        {/* TODO HOMEPAGE */}
          {/* <Route
            path="messages"
            element={<DashboardMessages />}
          />
          <Route path="tasks" element={<DashboardTasks />} /> */}
        </Route>
        {/* TODO ABOUT PAGE */}
        {/* <Route path="about" element={<AboutPage />} /> */}
        <Route path="documentation" element={<Documentation />} />
        <Route path="tracks" element={<Tracks />} />
        <Route path="map" element={<Map />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
