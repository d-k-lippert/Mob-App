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
import Concerts from "./Components/show-list";
import {loadState, saveState} from "./Components/localStorage"



const LOAD_ITEM = 'LOAD_ITEM'
const DELETE_ELEM = 'DELETE_ELEM'
const CREATE_ELEM = 'CREATE_ELEM'
//const EDIT_ELEM = 'EDIT_ELEM'
const TOGGLE_CONCERTS = 'TOGGLE_CONCERTS'

const initialState = {
    concerts: [
        {
            id: uuid(),
            artist: '',
            date:'',
            genre:'',
            location:''
        }
    ]
}



function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ELEM: {
            const newList =
                [...state.concerts,
                    {
                        id: action.payload.id,
                        artist: action.payload.artist,
                        date: action.payload.date,
                        genre: action.payload.genre,
                        location: action.payload.location
                    }
                ]
            return {...state, concerts: newList}
        }
        case DELETE_ELEM: {
            const id = action.payload
            const newList = []
            // ...
            for (let elem of state.concerts) {
                if (elem.id !== id) {
                    newList.push(elem)
                }
            }
            return {...state, concerts: newList}
        }

        default:
            return state
    }
}





const persistedState = loadState()

const store = createStore(
    reducer,
    persistedState
)

store.subscribe(() => {
    saveState(store.getState())
});


ReactDom.render(
    <Layout className="viewport center">

        <Provider store={store}>
            <div className="flex space-even">
                    <CreateElem/>
                    <Concerts/>
            </div>
        </Provider>

    </Layout>,
    document.getElementById('main')
)
