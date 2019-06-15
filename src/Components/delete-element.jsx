import {connect} from "react-redux";
import React from "react";
import {Button} from "antd";


const DELETE_ELEM = 'DELETE_ELEM'

@connect()
class Elem extends React.Component {
    deleteHandler = () => {
        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})
    }

    render() {
        return <div className="flex center v-center">
            <input type="text" value={this.props.artist} disabled/>
            <Button type="danger" onClick={this.deleteHandler}>delete me</Button>
        </div>
    }
}
export default Elem;