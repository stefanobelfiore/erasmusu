import React from "react";
import PropTypes from "prop-types";
import Button from "../ui/button/button";
import "./cardRoom.scss";

const CardRoom = ({ description, price, image }) => {

const goToImage = (imagen) => {
  const newWindow = window.open(imagen, '_blank')
  if (newWindow) newWindow.opener = null
}

  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div  className="col-md-4">
            <img onClick={()=> {goToImage(image)}} src={image} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-end">
                <h5 className="card-title">{price}</h5>
              </div>
              <div className="d-flex justify-content">
              <p className="card-text">{description}</p>
              </div>
            </div>
              <div className="d-flex justify-content-end">
                <div className="more-details-button">
                  <Button
                    textcontent="More details"
                    buttonsize="lg"
                    bgcolor="green"
                  />
                </div>
                <div className="book-now-button">
                  <Button
                    textcontent="Book now!"
                    buttonsize="lg"
                    bgcolor="orange"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardRoom.propTypes = {
  price: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default CardRoom;
