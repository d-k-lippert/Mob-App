import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'antd'
import 'antd/dist/antd.css'
import '../main_style.css'
import uuid from 'uuid/v4'


const CREATE_ELEM = 'CREATE_ELEM'
const SAVE_ELEM = 'SAVE_ELEM'

@connect
class SaveElem extends React.Component
{

}

@connect()
class CreateElem extends React.Component {
    constructor(props) {
        super(props)

        this.artistRef = React.createRef()
        this.dateRef = React.createRef()
        this.genreRef = React.createRef()
        this.locationRef = React.createRef()

        const concerts = {

                    id: uuid(),
                    artist: '',
                    date:'',
                    genre:'',
                    location:''
                }
        }


    componentWillMount() {
        localStorage.getItem('concerts') && this.setState({
            concerts: JSON.parse(localStorage.getItem('concerts'))}
        )
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        localStorage.setItem('concerts', JSON.stringify(nextState.concerts))

    }

    componentDidMount() {
        if(!localStorage.getItem('concerts')){


        console.log('nix im speicher')}
        else{
            console.log('Hure')
        }
    }

    handleCreate = () => {


        //Diese Konstante muss in show-list.jsx in Konstante listUI die gleichen namen haben
        const artist = this.artistRef.current.value

        const date = this.dateRef.current.value
        const genre = this.genreRef.current.value
        const location = this.locationRef.current.value
        this.props.dispatch({type: CREATE_ELEM, payload: {artist, date, genre, location, id: uuid()}})

    }
    render() {

        return <div className="flex center v-center ">



            <form className="flex v-center">
                <label>Artist
                    <input className="round-inputs" ref={this.artistRef} type="text" required placeholder="insert artist"/>
                </label>



                <label>Date
                    <input className="round-inputs" ref={this.dateRef} type="date" required placeholder="insert date of concert"/>
                </label>

                <label>Genre
                    <select className="round-inputs" ref={this.genreRef} placeholder="Genre">
                        <option value="Rock">Rock</option>
                        <option value="Rap">Rap</option>
                        <option value="Techno">Techno</option>
                        <option value="Metal">Metal</option>
                        <option value="Noise">Noise</option>
                    </select>
                </label>

                <label>Location
                    <input className="round-inputs" ref={this.locationRef} type="text" required placeholder="insert location"/>
                </label>

                <Button type="primary" onClick={this.handleCreate} ><Icon type="plus-circle" /></Button>
            </form>
        </div>
    }
}

export default CreateElem;