import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { config } from 'node-config-ts';
import { FormattedMessage, useIntl } from 'react-intl';
import { signOut, useSession } from 'next-auth/react';
import { useState, FormEvent, ReactNode } from 'react';

import { fetcher } from '@/utils/fetcher';

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
        <Alert severity="success" sx={{ my: 1 }}>
          <FormattedMessage
            defaultMessage="You're already registered"
            id="registration.already_registered"
            description="Error message if connected user is already registered"
          />
        </Alert>
      )}
      <Typography variant="h4">
        <FormattedMessage
          defaultMessage="1 - Add bot to your friends"
          id="registration.step.add_bot"
          description="First step to register"
        />
      </Typography>
      <Box component="p">
        <FormattedMessage
          defaultMessage="Add this friend code <code>{trainerCode}</code>"
          id="registration.step.add_bot_instruction"
          description="Instruction of first step"
          values={{
            code: (chunks: ReactNode) => <code>{chunks}</code>,
            trainerCode: config.trainerCode,
          }}
        />
      </Box>
      <Typography variant="h4">
        <FormattedMessage
          defaultMessage="2 - Link your account"
          id="registration.step.link_account"
          description="Second step to register"
        />
      </Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        {errorMessage && (
          <Alert severity="error" sx={{ my: 1 }}>
            {errorMessage}
          </Alert>
        )}
        <Box sx={{ my: 1 }}>
          <TextField
            name="trainerName"
            required
            label={intl.formatMessage({
              id: 'registration.trainer_name',
              defaultMessage: 'Trainer name',
              description: 'Trainer name input label',
            })}
            value={trainerName}
            onChange={(event) => setTrainerName(event.target.value)}
          />
        </Box>
        <Button variant="contained" type="submit" disabled={isSubmitting || isAlreadyRegistered}>
          <FormattedMessage
            defaultMessage="Submit"
            id="registration.submit"
            description="Button to validate registration"
          />
        </Button>
      </Box>
    </>
  );
};
