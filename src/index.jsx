import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import uuid from 'uuid/v4'
import {Layout} from 'antd'
//import {Button} from 'antd'
import 'antd/dist/antd.css'
import './main_style.css'


import CreateElem from "./Components/create-element";
import List from "./Components/show-list";





const LOAD_ITEM = 'LOAD_ITEM'
const DELETE_ELEM = 'DELETE_ELEM'
const CREATE_ELEM = 'CREATE_ELEM'
//const EDIT_ELEM = 'EDIT_ELEM'


const initialState = {
    list: [
        {
            id: uuid(),
            artist: '',
            date:'',
            genre:''
        }
    ]
}



function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ELEM: {
            const newList = [...state.list, {id: action.payload.id, artist: action.payload.artist, date: action.payload.date, genre: action.payload.genre}]
            return {...state, list: newList}
        }
        case DELETE_ELEM: {
            const id = action.payload
            const newList = []
            // ...
            for (let elem of state.list) {
                if (elem.id !== id) {
                    newList.push(elem)
                }
            }
            return {...state, list: newList}
        }
        default:
            return state
    }
}
/*
@connect()
class Elem extends React.Component {
    deleteHandler = () => {
        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})
    }

    render() {
        return <div className="flex center v-center">
            {this.props.name}
            <Button type="danger" onClick={this.deleteHandler}>delete me</Button>
        </div>
    }
}
/*
function connectListToListComponent(state) {
    return {list: state.list}
}

@connect(connectListToListComponent)
class List extends React.Component {
    render() {
        const list = this.props.list
        const listUI = list.map(elem => <Elem key={elem.id} id={elem.id} name={elem.name}/>)

        return <div className="flex center v-center flex-direct">
            {listUI}
        </div>
    }
}


/*
@connect()
class CreateElem extends React.Component {
    constructor() {
        super()

        this.textRef = React.createRef()
    }

    handleCreate = () => {
        const name = this.textRef.current.value

        this.props.dispatch({type: CREATE_ELEM, payload: {name, id: uuid()}})
    }

    render() {
        return <div className="flex center v-center">
            <input ref={this.textRef} type="text" required/>
            <Button type="primary" onClick={this.handleCreate}>create me</Button>
        </div>
    }
}
*/


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))



const value = localStorage.getItem('rezept12')
store.dispatch({type:LOAD_ITEM},value)



ReactDom.render(
    <Layout>

        <Provider store={store}>

                    <CreateElem/>
                    <List/>

        </Provider>

    </Layout>,
    document.getElementById('main')
)
