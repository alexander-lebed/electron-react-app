export enum AppTypeKeys {
  APP_LOADING_START = 'app/APP_LOADING_START',
  APP_LOADING_FINISH = 'app/APP_LOADING_FINISH'
}

type StartLoadingAction = {
  type: AppTypeKeys.APP_LOADING_START;
};

type FinishLoadingAction = {
  type: AppTypeKeys.APP_LOADING_FINISH;
};

export type AppTypes = StartLoadingAction | FinishLoadingAction;

export function loading(loading: boolean) {
  return {
    type: loading
      ? AppTypeKeys.APP_LOADING_START
      : AppTypeKeys.APP_LOADING_FINISH
  };
}

export default { loading };
