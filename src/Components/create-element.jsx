import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import 'antd/dist/antd.css'
import '../main_style.css'
import uuid from 'uuid/v4'


const CREATE_ELEM = 'CREATE_ELEM'

@connect()
class CreateElem extends React.Component {
    constructor(props) {
        super(props)

        this.textRef = React.createRef()
    }

    handleCreate = () => {

        //Diese Konstante muss ins show-list in Konstante listUI die gleichen namen haben  
        const artist = this.textRef.current.value



        this.props.dispatch({type: CREATE_ELEM, payload: {artist, id: uuid()}})
    }

    render() {
        return <div className="flex center v-center">
            <input ref={this.textRef} type="text" required/>
            <Button type="primary" onClick={this.handleCreate}>create me</Button>
        </div>
    }
}

export default CreateElem;