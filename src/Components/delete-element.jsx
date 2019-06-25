import {connect} from "react-redux";
import React from "react";
import {Button, Checkbox, Icon, Typography} from "antd";
import '../main_style.css'
import uuid from 'uuid/v4'

const DELETE_ELEM = 'DELETE_ELEM'
const EDIT_ELEM = 'EDIT_ELEM'
const { Paragraph } = Typography;



@connect()
class Elem extends React.Component {
    constructor(props) {
        super(props)


       /* this.artistRef = React.createRef()*/


        this.state = {
            artist: this.props.artist,
            date: this.props.date,
            genre: this.props.genre,
            isInEditMode: false,
            isExpanded: false
        }
    }



    deleteHandler = () => {
        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})


    }

    /*handleTextChange(event) {
    this.props.setDataValue(event.target.value);
}*/
    /*

    onChange = () => {
        const artist = this.artistRef.current.value
        const date = this.dateRef.current.value
        const genre = this.genreRef.current.value
        const location = this.locationRef.current.value

        this.props.dispatch({type: EDIT_ELEM, payload: {artist, date, genre, location, id}})
    };
*/

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

    expandHandler=()=>{
        this.setState({
            isExpanded:!this.state.isExpanded
        })
    }


    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    updateComponentValue = () => {
        /*const artist = this.artistRef.current.value*/
        this.setState({
            isInEditMode: false,
            artist: this.refs.artistInput.value,
            date: this.refs.dateInput.value,
            genre: this.refs.genreInput.value,


        })

            /*this.props.dispatch({type: EDIT_ELEM, payload: {artist,  id: uuid()}})*/
    }


    render() {
        const {isExpanded} =this.state
        //Render Edited
        return this.state.isInEditMode ?

            <div className="flex space-even v-center flex-direct flex_1">

                <p> Artist:
                <input type="text" defaultValue={this.state.artist} ref="artistInput"  /*ref={this.artistRef}*/ />
                </p>
                <input type="date" defaultValue={this.state.date} ref="dateInput"  /*ref={this.dateRef}*/ />



                <label>Genre
                    <select className="round-inputs" defaultValue={this.state.genre} ref="genreInput">
                        <option value="Rock">Rock</option>
                        <option value="Rap">Rap</option>
                        <option value="Techno">Techno</option>
                        <option value="Metal">Metal</option>
                        <option value="Noise">Noise</option>
                    </select>
                </label>
                
                <p>Location: {this.props.location}</p>
                <Button type="danger" onClick={this.changeEditMode}>Cancel</Button>
                <Button type="primary" onClick={this.updateComponentValue.bind(this)}>Save Edit</Button>

            </div>

            :

            //Render Default
        <div className="flex space-even v-center flex-direct-column-wrap spacer">

            <h2 className="panel-header" onClick={this.expandHandler}> {this.state.artist} live in concert</h2>

            <div className={`panel ${isExpanded ? 'is-expanded': ''}`}>
                <div className="flex-direct-column-wrap">

                        <p>Datum: {this.state.date}</p>


                        <p>Genre: {this.state.genre}</p>


                        <p>Location: {this.props.location}</p>
                    <br/>

                    <Button type="danger" onClick={this.deleteHandler}><Icon type="delete" /></Button>
                    <Button onClick={this.changeEditMode}><Icon type="edit" /></Button>
                </div>
            </div>
        </div>

    }
}
export default Elem;