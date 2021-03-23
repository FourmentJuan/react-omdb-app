import React from "react";



const Card = ({movie}) => {
  const {Title,Poster,Year,Type,id} = movie
  return (
    <div className="col-md-4" key={id}>
      <div className="card">
        <img src={Poster} alt={Title} className="card-img-top" width="100"/>
        <h4>
          {Title} {Year}
        </h4>
        <p>{Type}</p>
      </div>
    </div>
  );
}

export default Card;
