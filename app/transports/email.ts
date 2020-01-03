import { apiRequest } from './api';
import { mockStorage } from './mockStorage';
import { EmailModel } from '../models';
import { CURRENT_USER_EMAIL } from '../constants';
import { FOLDERS } from '../types';

const filterByFolder = (emails: EmailModel[], folder: FOLDERS) => {
  switch (folder) {
    case FOLDERS.INBOX:
      return emails.filter(
        e => e.sent && !e.deleted && e.to === CURRENT_USER_EMAIL
      );
    case FOLDERS.SENT:
      return emails.filter(
        e => e.sent && !e.deleted && e.from === CURRENT_USER_EMAIL
      );
    case FOLDERS.DRAFTS:
      return emails.filter(
        e => !e.sent && !e.deleted && e.from === CURRENT_USER_EMAIL
      );
    case FOLDERS.TRASH:
      return emails.filter(e => e.deleted);
    case FOLDERS.ALL:
      return emails;
    default:
      return emails;
  }
};

export const EmailApi = {
  fetch: (folder?: FOLDERS) => {
    return apiRequest({ url: '/mail/' + folder, method: 'GET' }).then(() => {
      let response;

      if (folder) {
        response = filterByFolder(mockStorage.emails, folder);
      } else {
        response = mockStorage.emails;
      }
      if (!response) {
        throw 'Invalid email id';
      }
      console.info('TRANSPORT SUCCESS MOCK', response);
      return response;
    });
  },
  update: (emailId: number, email: EmailModel) => {
    return apiRequest({
      url: '/mail/' + emailId,
      method: 'PUT',
      body: { emailId, email }
    }).then(() => {
      let response: EmailModel = null;

      mockStorage.emails.forEach((element, index, arr) => {
        if (element.id === emailId) {
          arr[index] = {
            ...arr[index],
            ...email
          };
          response = arr[index];
        }
      });

      console.info('TRANSPORT SUCCESS MOCK', email);
      return response;
    });
  },
  remove: (emailId: number) => {
    return apiRequest({ url: '/mail/' + emailId, method: 'DELETE' }).then(
      () => {
        mockStorage.emails.forEach((element, index, arr) => {
          if (element.id === emailId) {
            arr[index] = {
              ...arr[index],
              deleted: true
            };
          }
        });
        console.info('TRANSPORT SUCCESS MOCK', emailId);
      }
    );
  }
};
