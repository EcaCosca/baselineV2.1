import React, {useState} from 'react'
// import Table from '../components/table/Table'

const Tracks = () => {
  const [trackData, setTrackData] = useState([
    {date:"2023 Jul 14 21:24:52 CEST", height:581, country:"Switzerland", exit:"Nose 3.5", suit:"Corvid", type:"BASE"},
    {date:"2023 Jul 14 18:31:00 CEST", height:1519, country:"Switzerland", exit:"Low Ultimate", suit:"Corvid", type:"BASE"},
    {date:"2023 Jul 14 13:34:44 CEST", height:510, country:"Switzerland", exit:"Nose 3", suit:"Corvid", type:"BASE"},
    {date:"2023 Jul 13 17:19:16 CEST", height:572, country:"Switzerland", exit:"High Nose", suit:"Corvid", type:"BASE"},
    {date:"2023 Jul 11 18:15:21 CEST", height:646, country:"Switzerland", exit:"Via Ferrata", suit:"Corvid", type:"BASE"},
    {date:"2023 Jul 10 19:11:02 CEST", height:804, country:"Switzerland", exit:"Nose 3.5", suit:"Corvid", type:"BASE"},
    {date:"2022 Dec 20 11:47:36 CET", height:881, country:"France", location:"Belvédère	Freak", type:"BASE"},
    {date:"2022 Nov 27 13:56:09 CET", height:871, country:"Switzerland", location:"Le Châble", type:"BASE"},
    {date:"2022 Nov 27 13:56:04 CET", height:872, country:"Switzerland", location:"Le Châble", suit:"Freak", type:"BASE"},
    {date:"2022 Nov 27 11:21:48 CET", height:3440, country:"Switzerland", location:"Verbier", suit:"Freak", type:"Skydive"},
    {date:"2022 Oct 02 15:53:00 CEST", height:4063, country:"Spain", location:"Saltamos Village", type:"Skydive"},
    {date:"2022 Oct 02 13:30:42 CEST", height:5285, country:"Spain", location:"Saltamos Village", type:"Skydive"},
  ])


  return (
    <div>
      <h3>Tracks</h3>

      {/* FILTERS */}
      {/* TRACKS */}
      {/* TOTAL, BASE, SKYDIVE */}
      
      {/* COUNTRIES */}

      {/* SUITS */}

      {/* TODO https://www.youtube.com/watch?v=j6-ImdZW7aM&ab_channel=Joshtriedcoding */}
      {/* TODO https://ui.shadcn.com/examples/dashboard */}
      {/* LIMIT RESULTS BY QUANTITY */}
      {/* SEACHBAR */}
      {/* TABLE */}
      {/* table header */}
      {/* date, height, location, suit, BASE */}
      {/* PAGINATION */}
      
      {/* delete table components  */}
      {/* disect table components  */}
      {/* <Table /> */}
    </div>
  )
}

export default Tracks