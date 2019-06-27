import React from "react"
import {Icon, Input} from "antd";
import {Button} from "antd";


class Concerts extends React.Component {

    constructor(props){
        super(props)

        this.artistRef = React.createRef()
        this.dateRef = React.createRef()
        this.genreRef = React.createRef()
        this.locationRef = React.createRef()

        this.state={

            concerts:
                {
                artist: '',
                location: '',
                date: '',
                genre: '',
                }

        }
    }


    componentWillUpdate(nextProps, nextState, nextContext) {

        localStorage.setItem('concerts' , JSON.stringify(nextState.artist))
        this.setState({
            artist: JSON.parse(localStorage.getItem('artists'))
        })

    }

    handleCreate=()=>{
        let artist = this.artistRef.current.value
        const location = this.locationRef.current.value
        const date = this.dateRef.current.value
        const genre = this.genreRef.current.value

        alert(artist + location + date + genre)

        //Artist
        if(localStorage.getItem('artists') == null)
        {
            let artists = [];
            artists.push(artist)
            localStorage.setItem('artists' , JSON.stringify(artists))
        }
        else
        {
            let artists = JSON.parse(localStorage.getItem('artists'))
            artists.push(artist)
            localStorage.setItem('artists' , JSON.stringify(artists))
        }

        //Location
        if(localStorage.getItem('locations') == null)
        {
            let locations = [];
            locations.push(location)
            localStorage.setItem('locations' , JSON.stringify(locations))
        }
        else
        {
            let locations = JSON.parse(localStorage.getItem('locations'))
            locations.push(location)
            localStorage.setItem('locations' , JSON.stringify(locations))
        }

        //Date
        if(localStorage.getItem('dates') == null)
        {
            let dates = [];
            dates.push(date)
            localStorage.setItem('dates' , JSON.stringify(dates))
        }
        else
        {
            let dates = JSON.parse(localStorage.getItem('dates'))
            dates.push(date)
            localStorage.setItem('dates' , JSON.stringify(dates))
        }

        //Genres
        if(localStorage.getItem('genres') == null)
        {
            let genres = [];
            genres.push(genre)
            localStorage.setItem('genres' , JSON.stringify(genres))
        }
        else
        {
            let genres = JSON.parse(localStorage.getItem('genres'))
            genres.push(genre)
            localStorage.setItem('genres' , JSON.stringify(genres))
        }


        this.setState({
            concerts: JSON.parse(localStorage.getItem('artists'))
        })

    }




    render(){
        return (
            <div>
                <h4>
                    my sweet concerts
                </h4>
                <form>
                <input type="text" className="round-inputs" ref={this.artistRef} placeholder="Insert artist" />

                <input type="text" className="round-inputs" ref={this.locationRef} placeholder="Insert location" />

                <input type="date" className="round-inputs"  ref={this.dateRef} placeholder="Insert date"/>


                <select className="round-inputs" ref={this.genreRef} placeholder="Genre">
                    <option value="Rock">Rock</option>
                    <option value="Rap">Rap</option>
                    <option value="Techno">Techno</option>
                    <option value="Metal">Metal</option>
                    <option value="Noise">Noise</option>
                </select>

                <Button type="primary" onClick={this.handleCreate}><Icon type="plus-circle" /></Button>
                </form>

                <div>

                        <ul>

                            {this.state.artist.map(function(work, index){

                                return(
                                    <li key={index}>{work}</li>
                                )
                            },this)}

                        </ul>

                </div>

            </div>
        )
    }
}

export default Concerts