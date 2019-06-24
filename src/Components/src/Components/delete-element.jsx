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
            location: this.props.location,

            isInEditMode: false,

        }
    }



    deleteHandler = () => {
        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})


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
            location: this.refs.locationInput.value,



        })
    }


    render() {

        //Render Edited
        return this.state.isInEditMode ?

            <div className="flex space-even v-center flex-direct">

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
                <label> Location:
                    <input type="text" defaultValue={this.state.location} ref="locationInput"/>
                </label>
                <Button type="danger" onClick={this.changeEditMode}>Cancel</Button>
                <Button type="primary" onClick={this.updateComponentValue.bind(this)}>Save Edit</Button>

            </div>

            :

            //Render Default
        <div className="flex space-even v-center flex-direct">
                <Checkbox value={this.props.id}></Checkbox>



                <p>Artist: {this.state.artist}</p>

                <p>Datum: {this.state.date}</p>


                <p>Genre: {this.state.genre}</p>


                <p>Location: {this.state.location}</p>

            <Button type="danger" onClick={this.deleteHandler}><Icon type="delete" /></Button>
            <Button onClick={this.changeEditMode}><Icon type="edit" /></Button>
        </div>

    }
}
export default Elem;