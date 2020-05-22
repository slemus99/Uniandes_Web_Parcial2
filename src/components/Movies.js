import React from "react"

import Movie from "./Movie"
import GraphMovies from "./GraphMovie"

export default class Movies extends React.Component {


    state = {
        "language": this.props.language,
        "movies": this.props.movies
    }

    renderTable = () => {
        return (
            <table className="table" >
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Directed by</th>
                    <th scope="col">Country</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Views</th>
                    <th scope="col">Release date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.movies.map((movie, id) => <Movie key={id} movie={movie}/>)}
                </tbody>
            </table>
        )
    }

    render () {
        return (
            <div>
                {this.renderTable()}
                <GraphMovies movies={this.props.movies}/>
            </div>
            
        )
    }

}