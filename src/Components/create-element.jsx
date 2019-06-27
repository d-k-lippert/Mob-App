import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Icon} from 'antd'
import 'antd/dist/antd.css'
import '../main_style.css'
import uuid from 'uuid/v4'
import Logo from '../img/logo.png'


const CREATE_ELEM = 'CREATE_ELEM'

@connect()
class CreateElem extends React.Component {
    constructor(props) {
        super(props)

        this.artistRef = React.createRef()
        this.dateRef = React.createRef()
        this.genreRef = React.createRef()
        this.locationRef = React.createRef()
    }


    handleCreate = () => {



        //Diese Konstante muss in show-list.jsx in Konstante listUI die gleichen namen haben
        const artist = this.artistRef.current.value
        const date = this.dateRef.current.value
        const genre = this.genreRef.current.value
        const location = this.locationRef.current.value
        this.props.dispatch({type: CREATE_ELEM, payload: {artist, date, genre,location,  id: uuid()}})



    }


    render() {
        return <div className="flex flex-start v-center primary-box">

            <form className="flex v-align flex-direct-column-wrap">
                <div className="flex center v-center">
                    <img className="icon" src={Logo} alt="logo" />
                </div>
                <div className="flex center">
                    <table>
                        <tr>
                            <td>
                                <h3 className="vertical-align auto-margin">Artist</h3>
                            </td>
                            <td>
                                <input className="round-inputs spacer-inputs" ref={this.artistRef} type="text" required placeholder="insert artist"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className="vertical-align auto-margin"> Date </h3>
                            </td>
                            <td>
                                <input className="round-inputs spacer-inputs" ref={this.dateRef} type="date" required placeholder="insert date of concert"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className="vertical-align auto-margin"> Genre</h3>
                            </td>
                            <td>
                                <select className="round-inputs spacer-inputs" ref={this.genreRef} placeholder="Genre">
                                    <option value="Rock">Rock</option>
                                    <option value="Rap">Rap</option>
                                    <option value="Techno">Techno</option>
                                    <option value="Metal">Metal</option>
                                    <option value="Noise">Noise</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className="vertical-align auto-margin"> Location </h3>
                            </td>
                            <td>
                                <input className="round-inputs spacer-inputs" ref={this.locationRef} type="text" required placeholder="insert location"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="text-align spacer-inputs">
                                <Button type="danger" className="button-style" onClick={this.handleCreate} ><Icon type="plus-circle" /></Button>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    }
}

export default CreateElem;