import { config } from 'node-config-ts';
import { FormattedMessage, useIntl } from 'react-intl';
import { signOut, useSession } from 'next-auth/react';
import { useState, FormEvent, ReactNode } from 'react';

import { fetcher } from '@/utils/fetcher';
import { Button } from '@/components/button';

export const Registration = (): JSX.Element => {
  const [trainerName, setTrainerName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const intl = useIntl();
  const { data: session } = useSession();
  const isAlreadyRegistered = !!session?.trainerId;

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const response = await fetcher<{
      error?: 'invalid_request' | 'trainer_not_found';
      message?: 'gg';
    }>('/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trainerName }),
    });

    if (response.error === 'trainer_not_found') {
      setErrorMessage(
        intl.formatMessage({
          id: 'registration.trainer_not_found',
          defaultMessage: 'Trainer not found. Please wait 30 minutes after adding the bot as your friend.',
          description: 'Registration error when trainer is not found',
        }),
      );
    } else if (response.error) {
      setErrorMessage(
        intl.formatMessage({
          id: 'registration.generic_error',
          defaultMessage: 'An error occurred. Please try again later.',
          description: 'Registration error when trainer is not found',
        }),
      );
    } else if (response.message === 'gg') {
      await signOut();
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {isAlreadyRegistered && (
        <div className="my-3 rounded bg-green text-black p-2">
          <FormattedMessage
            defaultMessage="You're already registered"
            id="registration.already_registered"
            description="Error message if connected user is already registered"
          />
        </div>
      )}
      <h3 className="title-2">
        <FormattedMessage
          defaultMessage="1 - Add bot to your friends"
          id="registration.step.add_bot"
          description="First step to register"
        />
      </h3>
      <p>
        <FormattedMessage
          defaultMessage="Add this friend code <code>{trainerCode}</code>"
          id="registration.step.add_bot_instruction"
          description="Instruction of first step"
          values={{
            code: (chunks: ReactNode) => <code>{chunks}</code>,
            trainerCode: config.trainerCode,
          }}
        />
      </p>
      <h3 className="title-2">
        <FormattedMessage
          defaultMessage="2 - Link your account"
          id="registration.step.link_account"
          description="Second step to register"
        />
      </h3>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {errorMessage && <div className="my-3 rounded bg-red text-black p-2">{errorMessage}</div>}
        <div className="my-3">
          <label>
            {intl.formatMessage({
              id: 'registration.trainer_name',
              defaultMessage: 'Trainer name',
              description: 'Trainer name input label',
            })}
            <input
              name="trainerName"
              required
              type="text"
              value={trainerName}
              onChange={(event) => setTrainerName(event.target.value)}
              className="ml-2"
            />
          </label>
        </div>
        <Button type="submit" disabled={isSubmitting || isAlreadyRegistered} className="px-3">
          <FormattedMessage
            defaultMessage="Submit"
            id="registration.submit"
            description="Button to validate registration"
          />
        </Button>
      </form>
    </>
  );
};
