import React, { Component } from 'react'


const API_KEY = "5e02044861740f3118eb48cc66fb2274"
// const ID = this.props.movie.id
// console.log(ID)


class Movie extends Component{


 async componentDidMount(){
    const url = 'https://api.themoviedb.org/3/movie/'+ this.props.movie.id+'?api_key=5e02044861740f3118eb48cc66fb2274&language=en-US';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({post: data.results})
    console.log(data)
  }

// const ID = this.props.movie.id
// console.log(ID)



  render() {
    console.log(this.props)
    console.log(this.props.movie.revenue)
    return (
      <li id="individual"> 
        <img src={'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path}/>
        <p>{this.props.movie.title}</p>
        <p>{this.props.movie.release_date}</p>
        <p>{this.props.movie.revenue}</p>

      </li>
    )
  }

}

export default Movie
