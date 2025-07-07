'use client';

import { useEffect } from 'react';

import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/system';
import { customTypography } from '@/theme';

import { ButtonCard } from '@/components/ButtonCard';
import { ParaphraseTextareaProps } from '@/types';
import { SAMPLE_TEXT } from '@/utils/constants';

export default function ParaphraseTextarea({
  status,
  onStatusChangeAction,
  onTextChangeAction,
  value,
}: ParaphraseTextareaProps) {
  const theme = useTheme();

  useEffect(() => {
    if (status === 'initial') {
      onTextChangeAction('');
    }
  }, [status, onTextChangeAction]);

  const handleChange = (value: string) => {
    onStatusChangeAction(value);
    onTextChangeAction(value);
  };

  const handleSample = () => {
    onStatusChangeAction(SAMPLE_TEXT);
    onTextChangeAction(SAMPLE_TEXT);
  };

  const handlePaste = async () => {
    const clipboardText = await navigator.clipboard.readText();
    onStatusChangeAction(clipboardText);
    onTextChangeAction(clipboardText);
  };

  return (
    <>
      <TextField
        fullWidth
        multiline
        rows={16}
        placeholder="Enter text here or upload file to humanize it."
        value={value}
        disabled={status === 'loading'}
        onChange={e => handleChange(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            padding: '16px',
            borderRadius: status === 'success' ? '28px' : '28px 28px 0 0',
            backgroundColor:
              status === 'initial' ? theme.palette.grey[50] : theme.palette.background.default,
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${theme.palette.grey[100]}`,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${theme.palette.grey[100]}`,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${theme.palette.grey[100]}`,
            },
            '& textarea::placeholder': {
              ...customTypography.placeholder,
            },
          },
        }}
      />

      {value.trim() === '' && (
        <Box
          sx={{
            position: 'absolute',
            zIndex: '5',
            top: '55%',
            left: '50%',
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translate(-50%, -50%)',
            padding: '16px',
          }}
        >
          <ButtonCard
            onClickAction={handlePaste}
            iconSrc="/content_paste.svg"
            alt="Paste"
            label="Paste Text"
          />
          <ButtonCard
            onClickAction={handleSample}
            iconSrc="/content_sample.svg"
            alt="Sample"
            label="Sample Text"
          />
        </Box>
      )}
    </>
  );
}
