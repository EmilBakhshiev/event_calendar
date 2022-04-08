import { AuthAction, AuthActionsEnum, AuthState } from "./types"

const initialState :AuthState = {
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthAction) : AuthState =>{
    switch(action.type){
        case AuthActionsEnum.SET_AUTH:
            


        default : return state
    }

}