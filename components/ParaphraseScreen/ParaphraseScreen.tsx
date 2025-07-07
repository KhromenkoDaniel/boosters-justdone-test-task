'use client';

import { Container, Typography } from '@mui/material';
import { customTypography } from '@/theme';
import { useTheme } from '@mui/system';
import { useState } from 'react';

import { ParaphraseTextarea } from '@/components/ParaphraseTextarea';
import { ParaphraseActions } from '@/components/ParaphraseActions';
import useParaphraseReducer from '@/hooks/useParaphraseReducer';

export default function ParaphraseScreen() {
  const [text, setText] = useState('');

  const theme = useTheme();

  const { status, error, handleClear, handleParaphrase, setReadyOrInitial } =
    useParaphraseReducer();

  const handleParaphraseAction = () => {
    void handleParaphrase(text, setText);
  };

  return (
    <Container component="section" maxWidth="lg">
      <ParaphraseTextarea
        value={text}
        status={status}
        onStatusChangeAction={setReadyOrInitial}
        onTextChangeAction={setText}
      />

      {status !== 'success' && (
        <ParaphraseActions
          status={status}
          onClear={handleClear}
          onParaphrase={handleParaphraseAction}
        />
      )}

      {error && (
        <Typography
          sx={{
            mt: 1,
            textAlign: 'left',
            ...customTypography.errorText,
            color: theme.palette.error.main,
          }}
        >
          {error}
        </Typography>
      )}
    </Container>
  );
}
