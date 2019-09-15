import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleLikeButton = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDeleteButton = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p>there are no movie on data base</p>;
    return (
      <div>
        <p>There are {this.state.movies.length} movie in database</p>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Fav</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    onClick={() => this.handleLikeButton(movie)}
                    liked={movie.liked}
                  />
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.handleDeleteButton(movie)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>{" "}
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
