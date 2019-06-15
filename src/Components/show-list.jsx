import {connect} from "react-redux";
import React from "react";
import '../main_style.css'
import Elem from './delete-element'



function connectListToListComponent(state) {
    return {list: state.list}
}

@connect(connectListToListComponent)
class List extends React.Component {
    render() {
        const list = this.props.list

        //bekommt attribute von create elem aus der handle-create function siehe create-element.jsx
        const listUI = list.map(elem => <Elem key={elem.id} id={elem.id} artist={elem.artist} date={elem.date} genre={elem.genre}/>)

        return <div className="flex space-even">
            {listUI}
        </div>
    }
}

export default List