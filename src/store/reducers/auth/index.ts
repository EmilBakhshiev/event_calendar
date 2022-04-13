import { IUser } from "../../../types/IUser"
import { AuthAction, AuthActionsEnum, AuthState } from "./types"

const initialState :AuthState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser
}

export const authReducer = (state = initialState, action: AuthAction) : AuthState =>{
    switch(action.type){
        case AuthActionsEnum.SET_AUTH:
            


        default : return state
    }

}