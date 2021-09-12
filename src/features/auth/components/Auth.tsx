import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const Auth = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  const loading = status === 'loading';

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!isUser) {
      signIn();
    }
  }, [isUser, loading]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
};
