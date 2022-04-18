import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/action-creatros";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}