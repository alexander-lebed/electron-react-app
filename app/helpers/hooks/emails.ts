import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EmailApi } from '../../transports/email';
import { loading } from '../../actions/app';
import { RootState } from '../../reducers';
import { EmailModel } from '../../models';

const folderSelector = (state: RootState) => state.emails.folder;
const refetchHashSelector = (state: RootState) => state.emails.refetchHash;

/**
 * Return updated list of emails based on selected folder.
 * NOTE: I could keep emails in reducer, but just wanted to show how I make custom hooks.
 */
export const useEmails = () => {
  const [emails, setEmails] = useState<EmailModel[]>([]);
  const selectedFolder = useSelector(folderSelector);
  const refetchHash = useSelector(refetchHashSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(loading(true));
        const response = await EmailApi.fetch(selectedFolder);
        setEmails(response);
      } finally {
        dispatch(loading(false));
      }
    })();
  }, [selectedFolder, refetchHash]);

  return emails;
};
