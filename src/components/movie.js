import React from "react";
import Modal from './modal'
function movie(props) {
  const bb = props.affichelist
    .filter(movie =>
      movie.name.toLowerCase().includes(props.filtredby.name.toLowerCase())
    )
    .filter(movie => props.filtredby.rating <= movie.rank.ranknumber);
  return (
    <div className="movielist">
      {bb.map(el => (
        <div className="moviecontainer">
          <span className="movierank">
            {el.rank.stars.map((el2, i) => (
              <i
                className={
                  i < el.rank.ranknumber
                    ? "fas fa-star yellostars"
                    : "fas fa-star whitestars"
                }
              />
            ))}
          </span>
          <img src={el.url} />
          <p className="moviename">{el.name}</p>
        </div>
      ))}
      <div className={'modalcontainer'}>
        <Modal movieadd={props.newmovieadd}/></div>
    </div>
  );
}
export default movie;
