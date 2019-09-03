import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDeleteButton = movie => {
    let movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    if (this.state.movies.length === 0)
      return <p>there are no movie in database</p>;
    return (
      <div>
        <p>there are {this.state.movies.length} movie in database</p>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">No in Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDeleteButton(movie)}
                    type="button"
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
