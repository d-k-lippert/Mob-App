import {connect} from "react-redux";
import React from "react";
import {Button, Checkbox, Icon, Typography} from "antd";
import '../main_style.css'


const DELETE_ELEM = 'DELETE_ELEM'
const EDIT_ELEM = 'EDIT_ELEM'
const { Paragraph } = Typography;



@connect()
class Elem extends React.Component {
    constructor(props) {
        super(props)

        this.artistRef = React.createRef()
        this.dateRef = React.createRef()
        this.genreRef = React.createRef()
        this.locationRef = React.createRef()
    }


    deleteHandler = () => {
        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})
    }


    /*handleTextChange(event) {
    this.props.setDataValue(event.target.value);
}*/

    onChange = () => {
        const artist = this.artistRef.current.value
        const date = this.dateRef.current.value
        const genre = this.genreRef.current.value
        const location = this.locationRef.current.value

        this.props.dispatch({type: EDIT_ELEM, payload: {artist, date, genre, location, id}})
    };


/*
    render() {
        return (
            <div>
                <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>
            </div>
        );
    }
}

    */



    render() {

        return <div className="flex space-even v-center flex-direct">
                <Checkbox value={this.props.id}></Checkbox>

                <Paragraph editable={{ onChange: this.onChange }} ref={this.artistRef} type="text">{this.props.artist}</Paragraph>
                <p>Datum: {this.props.date}</p>
                <p>Genre: {this.props.genre}</p>
                <p>Location: {this.props.location}</p>

            <Button type="danger" onClick={this.deleteHandler}><Icon type="delete" /></Button>
        </div>

    }
}
export default Elem;