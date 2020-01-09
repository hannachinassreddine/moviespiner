import React from "react";
import Movie from "./movie";
import Loading from './loding'
import Search from "./search";
import "./movie.css";

class movielist extends React.Component {
  state = {
    movielist: [
      {
        name: "The Informer",
        rank: { stars: ["", "", "", "", ""], ranknumber: 2 },
        url:
          "https://img.yts.lt/assets/images/movies/the_informer_2019/medium-cover.jpg"
      },
      {
        name: "Berlin-Alexanderplatz - Die Geschichte Franz Biberkopfs",
        rank: { stars: ["", "", "", "", ""], ranknumber: 3 },
        url:
          "https://img.yts.lt/assets/images/movies/berlin_alexanderplatz_die_geschichte_franz_biberkopfs_1931/medium-cover.jpg"
      },
      {
        name: "Joker",
        rank: { stars: ["", "", "", "", ""], ranknumber: 4 },
        url:
          "https://img.yts.lt/assets/images/movies/joker_2019/medium-cover.jpg"
      }
    ],

    newmovie: {
      name: "",
      rank: { stars: ["", "", "", "", ""], ranknumber: 0 },
      url: ""
    },
    newmoviename: "",
    newmoviesrc: "",
    newmovierank: "",
    searchtheme: "",
    searchtheme2: "",
    ratingsearch: 0,
    isLoading:false
  };
  
  confirmenewmovie = (obj) => {
      
    this.setState({
      movielist: [...this.state.movielist, obj],
      newmovie: {
        name: "",
        rank: { stars: ["", "", "", "", ""], ranknumber: 0 },
        url: ""
      }
    });
  };
  handelsearch = a => {
    this.setState({
      searchtheme: a.target.value
    });
  };
  runsearch = () => {
    this.setState({
      searchtheme2: this.state.searchtheme
    });
  };
  starchange = e => {
    this.setState({
      ratingsearch: e
    });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading:true})
    }, 3000)
  }
  render() {
    
    return !this.state.isLoading?<Loading /> :(
      <div>
        <Search
          searchin={this.runsearch}
          searshresult={this.handelsearch}
          starchanged={this.starchange}
        />
        <Movie
          affichelist={this.state.movielist}
          filtredby={{
            name: this.state.searchtheme2,
            rating: this.state.ratingsearch
          }}
          newmovieadd={{newmovie:this.state.newmovie,confirme:this.confirmenewmovie}}
        />
        
      </div>
    );
  }
}
export default movielist;
