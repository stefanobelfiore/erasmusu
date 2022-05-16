import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar/navbar";
import SearchFilters from "../components/searchFilters/searchFilters";
import RoomScreen from "../components/roomscreen/roomsScreen";
import "../styles/pages/home.scss";
import { getAllResultsIds } from "../actions/resultsRoom";
import { getThirdyResults } from "../actions/resultsRoom";

function Home() {
  const dispatch = useDispatch();
  const dataNews = useSelector((state) => state.results.AllResultsListIds);
  const dataRoomsCards = useSelector((state) => state.results.thirdyResults);
  const dataRoomsForType = useSelector((state) => state.results.resultsForType);
 

  useEffect(()=>{
    dispatch(getAllResultsIds())
    console.log(dataNews)
  }, [])

 

  return (
    <div className="home-div">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="search-and-rooms-div">
          <div className="search-div">
            <SearchFilters />
          </div>
          <div className="rooms-div">
            <RoomScreen results={dataRoomsCards} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
