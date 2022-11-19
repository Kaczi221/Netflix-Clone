import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Up coming' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='3' title='Top Rated' fetchURL={requests.requestTop}/>
    </div>
  )
}

export default Home