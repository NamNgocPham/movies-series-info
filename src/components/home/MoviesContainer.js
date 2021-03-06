import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';


export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content = movies.Response === "True" ? movies.Search.map((movie, index) => {
      return <MovieCard key={index} movie={movie} />
    }) : '';

    return (
      <div className="row">
        { content }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);
