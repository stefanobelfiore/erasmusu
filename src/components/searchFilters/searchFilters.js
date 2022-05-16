import React,{useEffect, useState} from "react";
import Button from "../ui/button/button";
import InputSelected from "../ui/inputSelect/inputSelect";
import { useForm } from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { getThirdyResults } from "../../actions/resultsRoom";
import { sortByKey } from "../../helpers/getRequests";
import { getResultsForType } from "../../actions/resultsRoom";

const SearchFilters = () => {

  const dataNews = useSelector((state) => state.results.AllResultsListIds);
  console.log(dataNews);
  const dispatch = useDispatch();

  const [startArray, setstartArray] = useState(0);
  const [endArray, setendArray] = useState(209);

  const selectArray = (array) => {
    return array.slice(startArray, endArray);
  };


  const [formValues, handleInputChange] = useForm({
    type: "All",
    orderBy: "Ascending",
  });

  const { type, orderBy } = formValues;

  const handleDownload = (e) => {
    e.preventDefault();
    dispatch(getThirdyResults(selectArray(dataNews),orderBy));
    dispatch(getResultsForType(type))
    console.log(sortByKey(selectArray(dataNews),'pricePerMonth'))
    console.log(type, orderBy);
  };






  let selectType = {
    label: "Property type",
    options: ["all", "apartments", "rooms", "studios", "residences"],
  };
  
  let selectOrder = {
    label: "Order by",
    options: ["Ascending", "Descending"],
  };
  
  let button = {
    bgcolor: "green",
    textcontent: "Search",
    type: "submit",
  };

  

  return (
    <div className="main-div-search">
      <form onSubmit={handleDownload}>
        <div className="form-group">
          <InputSelected
            name="type"
            onChange={handleInputChange}
            value={type}
            label={selectType.label}
            options={selectType.options}
          />
        </div>
        <div className="form-group">
          <InputSelected
            name="orderBy"
            onChange={handleInputChange}
            value={orderBy}
            label={selectOrder.label}
            options={selectOrder.options}
          />
        </div>
        <Button
          type={button.type}
          textcontent={button.textcontent}
          bgcolor={button.bgcolor}
        />
      </form>
    </div>
  );
};
export default SearchFilters;
