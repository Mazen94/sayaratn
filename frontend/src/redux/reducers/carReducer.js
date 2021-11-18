import * as Types from "../actions/types"

const initstate={
  cars: [],
  isLoading: false,
  dialogCarIsShowed: false,
}
const carReducer=(state=initstate,{type,payload})=> {
    switch (type) {
        case Types.REQUEST_TO_ADD_CAR:
            return { ...state, isLoading:true }
        case Types.REQUEST_TO_ADD_CAR_SUCCESS:
            return { ...state,cars: [payload, ...state.cars], isLoading: false, dialogCarIsShowed:false }
        case Types.SHOW_OR_HIDE_THE_DIALOG_CAR:
            return {...state, dialogCarIsShowed: payload }
        default:
            return state;
    }
}

export default carReducer
