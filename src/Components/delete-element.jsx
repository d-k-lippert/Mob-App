import {connect} from "react-redux";
import React from "react";
import {Button, Icon, Typography} from "antd";
import '../main_style.css'
import uuid from 'uuid/v4'


const DELETE_ELEM = 'DELETE_ELEM'

const CREATE_ELEM = 'CREATE_ELEM'

const { Paragraph } = Typography;



@connect()
class Elem extends React.Component {
    constructor(props) {
        super(props)

        this.artistRef = React.createRef()
        this.dateRef = React.createRef()
        this.genreRef = React.createRef()
        this.locationRef = React.createRef()

        this.state = ({


            isInEditMode: false,
            isExpanded: false
        })
    }



    deleteHandler = () => {
        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})


    }


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

        this.setState({
            isInEditMode: false,
        })

        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})

        const artist = this.artistRef.current.value
        const date = this.dateRef.current.value
        const genre = this.genreRef.current.value
        const location = this.locationRef.current.value

        this.props.dispatch({type: CREATE_ELEM, payload: {artist, date, genre,location,  id: uuid()}})
    }








    render() {
        const {isExpanded} =this.state

        //Render Edited
        return this.state.isInEditMode ?

            <div>
                <div className="flex center">
                <h2 className={`panel-header ${this.state.isInEditMode ? 'red_col' : ''}`} onClick={this.expandHandler}> {this.props.artist} - {this.props.date}</h2>
                </div>
                <div className="flex space-even v-center flex-direct flex_1">

                    <input type="text" className="round-inputs spacer-inputs" defaultValue={this.props.artist} ref={this.artistRef} />

                    <input type="date" className="round-inputs spacer-inputs" defaultValue={this.props.date} ref={this.dateRef} />

                    <select className="round-inputs spacer-inputs" defaultValue={this.props.genre} ref={this.genreRef}>
                        <option value="Rock">Rock</option>
                        <option value="Rap">Rap</option>
                        <option value="Techno">Techno</option>
                        <option value="Metal">Metal</option>
                        <option value="Noise">Noise</option>
                    </select>

                    <input type="text" className="round-inputs spacer-inputs" defaultValue={this.props.location} ref={this.locationRef}/>
                <Button type="danger" onClick={this.changeEditMode}>Cancel</Button>
                <Button type="primary" onClick={this.updateComponentValue.bind(this)}>Save Edit</Button>

            </div>
            </div>

            :

            //Render Default
        <div className="flex space-even v-center flex-direct-column-wrap spacer">

            <h2 className="panel-header" onClick={this.expandHandler}> {this.props.artist} - {this.props.date}</h2>
                <div className={`panel ${isExpanded ? 'is-expanded': ''}`}>
                    <div className="flex-direct-column-wrap">

                            <h4>Genre: {this.props.genre}</h4>


                            <h4>Location: {this.props.location}</h4>
                        <br/>

                        <Button type="danger" onClick={this.deleteHandler}><Icon type="delete" /></Button>
                        <Button onClick={this.changeEditMode}><Icon type="edit" /></Button>
                    </div>
                </div>
        </div>

    }
}
export default Elem;