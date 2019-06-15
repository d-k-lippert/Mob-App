import React from 'react'
import ReactDom from 'react-dom'
import {connect, Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import uuid from 'uuid/v4'
import {Layout} from 'antd'
import {Button} from 'antd'
import 'antd/dist/antd.css'

const {Content}  = Layout;


const LOAD_ITEM = 'LOAD_ITEM'
const DELETE_ELEM = 'DELETE_ELEM'
const CREATE_ELEM = 'CREATE_ELEM'

const initialState = {
    list: [
        {
            id: uuid(),
            name: 'bob'
        }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ELEM: {
            const newList = [...state.list, {id: action.payload.id, name: action.payload.name}]
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

@connect()
class Elem extends React.Component {
    deleteHandler = () => {
        this.props.dispatch({type: DELETE_ELEM, payload: this.props.id})
    }

    render() {
        return <div>
            {this.props.name}
            <Button type="danger" onClick={this.deleteHandler}>delete me</Button>
        </div>
    }
}

function connectListToListComponent(state) {
    return {list: state.list}
}

@connect(connectListToListComponent)
class List extends React.Component {
    render() {
        const list = this.props.list
        const listUI = list.map(elem => <Elem key={elem.id} id={elem.id} name={elem.name}/>)

        return <div>
            {listUI}
        </div>
    }
}

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
        return <div>
            <input ref={this.textRef} type="text" required/>
            <Button type="primary" onClick={this.handleCreate}>create me</Button>
        </div>
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const value = localStorage.getItem('rezept12')
store.dispatch({type:LOAD_ITEM},value)

ReactDom.render(
    <Layout>
        <Content>
        <Provider store={store}>

                    <CreateElem/>
                    <List/>

        </Provider>
    </Content>
    </Layout>,
    document.getElementById('main')
)
