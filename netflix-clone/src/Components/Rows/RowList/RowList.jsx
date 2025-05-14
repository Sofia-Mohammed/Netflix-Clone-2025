import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <>
   
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow = {true}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow 
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} isLargeRow />

      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </>
  );
}

export default RowList