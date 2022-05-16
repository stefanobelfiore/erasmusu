import { types } from "../types/types";
import axios from "axios";
import { sortByKey } from "../helpers/getRequests";
import { sortByKeyReverse } from "../helpers/getRequests";

const baseUrlToFixTemporaryCorsProblem = "https://cors-anywhere.herokuapp.com/";
// --------PRIMER ENDPOINT QUE CARGA LAS INFO-----
export const getAllResultsIds = () => {
  return (dispatch) => {
    let endPoint = `https://staging.spotahome.com/api/public/listings/search/markers/madrid`;
    axios
      .get(`${baseUrlToFixTemporaryCorsProblem}${endPoint}`)
      .then((res) => {
        console.log(res.data.data);
        dispatch(setAllResultsIds(res.data.data));
      })
      .catch(function (error) {
        dispatch(
          setAllResultsIds({ AllResultsListIds: "no ha habido resultados" })
        );
        console.log("ERROR", error);
      });
  };
};

export const setAllResultsIds = (payload) => ({
  type: types.setAllResultsIds,
  payload: payload,
});

//---EN LA PRIMERA PETICIÓN CARGA SOLO EQUÍS CARDS---

export const getThirdyResults = (arrayRooms, orderBy) => {
  return (dispatch) => {
    
    let string = ``;
    if (arrayRooms) {
      string = `https://www.spotahome.com/api/public/listings/search/homecards_ids?ids[]=${arrayRooms[0].id}`;
      arrayRooms.map((room) => {

        if(arrayRooms[0].id !== room.id){
          string = string + `&ids[]=${room.id}`;
        }

      });
    }
    console.log(string, "stringdeurlarray");
    axios
      .get(`${baseUrlToFixTemporaryCorsProblem}${string}`)
      .then((res) => {
        console.log(`${baseUrlToFixTemporaryCorsProblem}${string}`)
        console.log(res);
        console.log(res.data.data.homecards)
        if(orderBy === "Ascending"){
          dispatch(setResults(sortByKey(res.data.data.homecards, 'pricePerMonth')));
        }
        if(orderBy === "Descending"){
          dispatch(setResults(sortByKeyReverse(res.data.data.homecards, 'pricePerMonth')));
        }
      })
      .catch(function (error) {
        dispatch(setResults([{ thirdyResults: "no ha habido resultados" }]));
        console.log("ERROR", error);
      });
  };
};

export const setResults = (payload) => ({
  type: types.setResults,
  payload: payload,
});
// ----OBTENER RESULTADOS POR TIPO DE BÚSQUEDA----
export const getResultsForType = (type = 'all') => {
  return (dispatch) => {
   
    let endPoint = `https://www.spotahome.com/api/public/listings/search/markers/madrid?type[]=${type}`
    axios
      .get(`${baseUrlToFixTemporaryCorsProblem}${endPoint}`)
      .then((res) => {
        dispatch(setAllResultsIds(res.data.data));
      })
      .catch(function (error) {
        dispatch(
          setResultsForType({ resultsForType: "no ha habido resultados" })
        );
        console.log("ERROR", error);
      });
  };
};

export const setResultsForType = (payload) => ({
  type: types.resultsForType,
  payload: payload,
});
