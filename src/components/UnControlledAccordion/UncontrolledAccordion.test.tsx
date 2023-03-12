import {reducer, reducerAC} from "./reducer";


test('reducer change value true', ()=>{

    const state={collapsed:false}

    const result = reducer(state, reducerAC())

    expect(result.collapsed).toBeTruthy()
})

test('reducer change value false', ()=>{

    const state={collapsed:true}

    const result = reducer(state, reducerAC())

    expect(result.collapsed).toBe(false)
})