import {connect} from "react-redux";
import React from "react";
import '../main_style.css'
import Elem from './delete-element'
import FlipMove from "react-flip-move"




function connectListToListComponent(state) {
    return {concerts: state.concerts}
}

@connect(connectListToListComponent)
class Concerts extends React.Component {


    render() {
        const concerts = this.props.concerts

        //bekommt attribute von create elem aus der handle-create function siehe create-element.jsx
        const concertsUI = concerts.map(elem => <Elem key={elem.id} id={elem.id} artist={elem.artist} date={elem.date} genre={elem.genre} location={elem.location}/>)

        return(
        <div className="flex space-even v-center">
            <FlipMove duration={400} ease="ease-out" className="flex center v-center flex-direct-column-wrap overflow">

                    {concertsUI}

            </FlipMove>
        </div>
        )
    }
}

export default Concerts