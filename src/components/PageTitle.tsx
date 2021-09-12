import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useState } from 'react';

export const PageTitle = ({ children }: { children: ReactNode }): JSX.Element | null => {
  const [element, setElement] = useState<HTMLElement | null | undefined>();

  useEffect(() => {
    if (document !== undefined) {
      setElement(document.getElementById('page-title'));
    }
  }, [setElement]);

  if (element) {
    return createPortal(children, element);
  }

  return null;
};
