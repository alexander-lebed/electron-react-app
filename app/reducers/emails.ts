import { EmailsTypeKeys, EmailsTypes } from '../actions/emails';
import { EmailModel } from '../models';
import { FOLDERS } from '../types';

export type EmailsState = {
  folder: FOLDERS;
  email: EmailModel;
  refetchHash: number;
};

const initState: EmailsState = {
  folder: FOLDERS.INBOX,
  email: null,
  refetchHash: Date.now()
};

export default function emails(state = initState, action: EmailsTypes) {
  switch (action.type) {
    case EmailsTypeKeys.SELECT_FOLDER:
      return {
        ...state,
        folder: action.payload
      };
    case EmailsTypeKeys.SELECT_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case EmailsTypeKeys.REFETCH_EMAILS:
      return {
        ...state,
        refetchHash: Date.now()
      };
    default:
      return state;
  }
}
