import React from "react";

export default function CardTemplate(anime) {
  return (
    <div className="row">
      <div className="col-sm">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{anime.title}</h5>
            <h6 className="card-subtitle mb-2">{anime}</h6>
            <p className="card-text">{anime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
