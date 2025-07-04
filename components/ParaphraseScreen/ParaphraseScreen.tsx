'use client';

import { Container, Typography } from '@mui/material';
import { customTypography } from '@/theme';
import { useTheme } from '@mui/system';

import { ParaphraseTextarea } from '@/components/ParaphraseTextarea';
import { ParaphraseActions } from '@/components/ParaphraseActions';
import useParaphrase from '@/hooks/useParaphrase';

export default function ParaphraseScreen() {
  const {
    text,
    error,
    isLoading,
    isParaphraseDisabled,
    shouldShowClear,
    handleTextChange,
    handlePaste,
    handleSample,
    handleClear,
    handleParaphrase,
  } = useParaphrase();

  const theme = useTheme();

  return (
    <Container component="section" maxWidth="lg">
      <ParaphraseTextarea
        value={text}
        onChange={handleTextChange}
        isLoading={isLoading}
        onPaste={handlePaste}
        onSample={handleSample}
      />

      <ParaphraseActions
        onClear={handleClear}
        onParaphrase={handleParaphrase}
        isParaphraseDisabled={isParaphraseDisabled}
        isLoading={isLoading}
        shouldShowClear={shouldShowClear}
      />

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
