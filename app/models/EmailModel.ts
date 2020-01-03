export interface EmailModel {
  id: number;
  from: string;
  to: string;
  timestamp: number;
  subject: string;
  body: string;
  sent: boolean;
  unread: boolean;
  deleted: boolean;
}
