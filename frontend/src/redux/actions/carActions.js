import * as Types from "./types"

export const addCarAction=(data)=> async(dispatch)=>{
    dispatch({type: Types.REQUEST_TO_ADD_CAR})
    /**
     * This setTimeOut you need to remove it after creating the ws 
     * is just now for testing 
     */
    setTimeout(() => {
        dispatch({
            type:Types.REQUEST_TO_ADD_CAR_SUCCESS,
            payload: data,
        });
    }, 1000)
try {
   // TODO HERE YOU SEND A REQUEST TO BACK END
   /**
    * Maybe it can be something like that 
    * const res= await axios.post("http://localhost:5000/user/car",data)
    *  dispatch({
        type:Types.REQUEST_TO_ADD_CAR_SUCCESS,
        payload: res.data,
    });
    */

} catch (error) {
   //TODO Should send a new action when ws fails
   /**
    * Maybe it can be something like that 
    *  dispatch({
        type:Types.REQUEST_TO_ADD_CAR_FAILED,
        payload: res.data,
    });
    */

}
}
export const showOrHideDialogCarAction = (isShowed) => {
    return {
        type:Types.SHOW_OR_HIDE_THE_DIALOG_CAR,
        payload: isShowed,
    }
}