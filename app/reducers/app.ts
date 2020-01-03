import { AppTypeKeys, AppTypes } from '../actions/app';

export type AppState = {
  loading: boolean;
};

const initState = {
  loading: false
};

export default function app(state = initState, action: AppTypes) {
  switch (action.type) {
    case AppTypeKeys.APP_LOADING_START:
      return {
        ...state,
        loading: true
      };
    case AppTypeKeys.APP_LOADING_FINISH:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
