import React from "react";

class search extends React.Component {
  state = {
    rating: ["", "", "", "", ""],
    ratingnumber: 0
  };
  render() {
    return (
      <div className={"serchcontainer movielist"}>
        <div className={"navsearch"}>
          <input onChange={this.props.searshresult}></input>
          <button onClick={this.props.searchin}>Search</button>
        </div>
        <div className={"searchrating"}>
          <p>minimum rating</p>
          <span className="movierank2">
            {this.state.rating.map((el2, z) => (
              <i
                onClick={() => {
                  this.setState({ ratingnumber: z + 1 });
                  this.props.starchanged(z + 1);
                }}
                className={
                  z < this.state.ratingnumber
                    ? "fas fa-star yellostars"
                    : "fas fa-star whitestars"
                }
              />
            ))}
          </span>
        </div>
      </div>
    );
  }
}
export default search;
