const TOGGLE_COLLAPSED='TOGGLE-COLLAPSED'

export type stateType = {
    collapsed:boolean
}


export const reducer = (state: stateType, action: mainType):stateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed:!state.collapsed}
        default:
            return state
    }
}


type mainType=reducerACType

type reducerACType=ReturnType<typeof reducerAC>

export const reducerAC = () => {
    return {type: TOGGLE_COLLAPSED} as const
}