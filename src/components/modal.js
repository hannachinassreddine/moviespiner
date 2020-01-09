import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
export default class AddMovie extends Component {
  state = { open: false, name: "", src: "", rank: "" };
  handelnewmoviesrc = e => {
    this.props.movieadd.newmovie.url=e.target.value
    this.setState({src:e.target.value})
  };
  handelnewmovierank = e => {
    this.props.movieadd.newmovie.rank={stars: ["", "", "", "", ""],
    ranknumber:e.target.value}
    this.setState({rank:e.target.value})
  };
  handelnewmoviename = e => {
    this.props.movieadd.newmovie.name=e.target.value
    this.setState({name:e.target.value})
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className={"moviecontainer"}>
        <button className="btn-modal" type="button" onClick={this.handleOpen}>
          +
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={this.state.open}>
            <div className="paper">
              <h2>Add Movies :</h2>
              <input
                name="name"
                type="text"
                placeholder="title"
                onChange={this.handelnewmoviename}
                value={this.state.name}
              />
              <input
                name="link"
                type="text"
                placeholder="Link"
                onChange={this.handelnewmoviesrc}
                value={this.state.src}
              />
              
              <input
                name="rate"
                type="text"
                placeholder="rate"
                onChange={this.handelnewmovierank}
                value={this.state.rank}
              />
              <button onClick={()=>{this.props.movieadd.confirme(this.props.movieadd.newmovie);this.setState({name: "", src: "", rank: ""})}}>Add</button>
              <button onClick={this.handleClose}>Cancel</button>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}
