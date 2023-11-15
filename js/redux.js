const reducer = (state=[] , action) =>{
    switch (action.type){
        case "ADD-TODO" :{
            let newTodo={
                id: crypto.randomUUID(),
                title: action.title
            }

            return[...state , newTodo]
        }
        case "REMOVE-TODO":{
            let newState =[...state].filter((todo)=> todo.id !== action.id)
            return newState
        }

        default:{
            return state
        }
    }
}

const createStore = (reducer) =>{

    let state;

    function dispach(action) {
        state = reducer(state , action)
    }

    function getState(){
        return state
    }

    return{
        dispach,
        getState
    }
}

let store = createStore(reducer)

store.dispach({
    type: 'ADD-TODO',
    title: 'Learn js'
})

console.log(store.getState())