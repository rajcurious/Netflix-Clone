import React from 'react'
import Row from '../components/Row'
import Banner from '../components/Banner'
import requests from '../requests'
import Navbar from '../components/Navbar'


function Home() {
    return (
        <div>
             <Navbar/>
            <Banner/>
                  <Row title="Netflix Orignals" fetchUrl={requests.netflixOrignals} isLargeRow />
                  {/* <Row title="Trending" fetchUrl={requests.trendingnow}/> */}
                  <Row title="Top Rated" fetchUrl={requests.topRated}/>
                  <Row title="Action Movies" fetchUrl={requests.actionMovies}/>
                  <Row title="Horror Movies" fetchUrl={requests.horrorMovies}/>
                  <Row title="Comedy Movies" fetchUrl={requests.comedyMovies}/>
                  <Row title="Documentaries" fetchUrl={requests.documentaries}/>
                  <Row title="Romance Movies" fetchUrl={requests.romanceMovies}/>
        </div>
    )
}

export default Home
