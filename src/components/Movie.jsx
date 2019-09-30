import React, { Component } from 'react'


const API_KEY = "5e02044861740f3118eb48cc66fb2274"
// const ID = this.props.movie.id
// console.log(ID)


class Movie extends Component{


 // componentDidMount(){
 //    const url = 'https://api.themoviedb.org/3/movie/{'+ this.props.movie.id +'}?api_key=' + API_KEY + '&language=en-US';
 //    const response = fetch(url);
 //    const data =  response.json();
 //    this.setState({post: data.results})
 //    console.log(data)
 //  }





  render() {
    console.log(this.props)
    return (
      <li id="individual"> 
        <img src={'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path}/>
        <p>{this.props.movie.title}</p>
        <p>{this.props.movie.release_date}</p> 
      </li>
    )
  }

}

export default Movie
