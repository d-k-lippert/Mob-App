import {connect} from "react-redux";
import React from "react";
import {Button} from "antd";
import '../main_style.css'


const DELETE_ELEM = 'DELETE_ELEM'

@connect()
class Elem extends React.Component {
    deleteHandler = () => {
        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})
    }

    render() {

        return <div className="flex space-even v-center flex-direct">
            <div>
                <p>Artist: {this.props.artist}</p>
                <p>Datum: {this.props.date}</p>
                <p>Genre: {this.props.genre}</p>
            </div>
            <Button type="danger" onClick={this.deleteHandler}>delete me</Button>
        </div>

    }
}
export default Elem;