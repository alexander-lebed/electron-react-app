import { combineReducers } from 'redux';
import app, { AppState } from './app';
import emails, { EmailsState } from './emails';

export type RootState = {
  app: AppState;
  emails: EmailsState;
};

export default function createRootReducer() {
  return combineReducers({
    app,
    emails
  });
}
