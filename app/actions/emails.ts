import { EmailModel } from '../models';
import { EmailApi } from '../transports/email';
import { FOLDERS } from '../types';

export enum EmailsTypeKeys {
  SELECT_FOLDER = 'emails/SELECT_FOLDER',
  SELECT_EMAIL = 'emails/SELECT_EMAIL',
  REFETCH_EMAILS = 'email/REFETCH_EMAILS'
}

type SelectFolderAction = {
  type: EmailsTypeKeys.SELECT_FOLDER;
  payload: FOLDERS;
};

type SelectEmailAction = {
  type: EmailsTypeKeys.SELECT_EMAIL;
  payload: EmailModel;
};

type RefetchEmailAction = {
  type: EmailsTypeKeys.REFETCH_EMAILS;
  payload: number;
};

export type EmailsTypes =
  | SelectFolderAction
  | SelectEmailAction
  | RefetchEmailAction;

export function selectFolder(folder: FOLDERS) {
  return {
    type: EmailsTypeKeys.SELECT_FOLDER,
    payload: folder
  };
}

export function selectEmail(email: EmailModel) {
  return {
    type: EmailsTypeKeys.SELECT_EMAIL,
    payload: email
  };
}

export function refetchEmails() {
  return {
    type: EmailsTypeKeys.REFETCH_EMAILS
  };
}

export function removeEmail(emailId: number) {
  return async dispatch => {
    await EmailApi.remove(emailId);
    dispatch(selectEmail(null));
    dispatch(refetchEmails());
  };
}

export function updateEmail(emailId: number, email: EmailModel) {
  return async dispatch => {
    const response = await EmailApi.update(emailId, email);
    dispatch(selectEmail(response));
    dispatch(refetchEmails());
  };
}

export default { selectFolder, selectEmail, updateEmail, removeEmail };
