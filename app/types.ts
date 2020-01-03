export enum FOLDERS {
  INBOX = 'INBOX',
  SENT = 'SENT',
  DRAFTS = 'DRAFTS',
  TRASH = 'TRASH',
  ALL = 'ALL'
}

type FolderIcon = {
  [key in FOLDERS]: string;
};

export const FOLDER_ICON: FolderIcon = {
  INBOX: 'fas fa-inbox',
  SENT: 'fas fa-paper-plane',
  DRAFTS: 'fas fa-file-alt',
  TRASH: 'fas fa-trash',
  ALL: 'fas fa-archive'
};
