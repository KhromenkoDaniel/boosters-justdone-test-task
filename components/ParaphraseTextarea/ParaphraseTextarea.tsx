import Image from 'next/image';

import { Button, Box, TextField } from '@mui/material';
import { useTheme } from '@mui/system';
import { customTypography } from '@/theme';

import { ParaphraseTextareaProps } from '@/types';

export default function ParaphraseTextarea({
  value,
  onChange,
  isLoading,
  onPaste,
  onSample,
}: ParaphraseTextareaProps) {
  const theme = useTheme();

  const isEmpty = value.trim() === '';

  const buttonSx = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '8px',
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: '11px',
    padding: '16px 8px',
    width: '196px',
    height: '80px',
    textTransform: 'none',
    ...customTypography.buttonCard,
    color: theme.palette.grey[300],
    backgroundColor: theme.palette.primary.contrastText,
  };

  return (
    <>
      <TextField
        fullWidth
        multiline
        rows={16}
        placeholder="Enter text here or upload file to humanize it."
        value={value}
        disabled={isLoading}
        onChange={e => onChange(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '28px 28px 0 0',
            backgroundColor: theme.palette.grey[50],
            padding: '16px',
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
      {isEmpty && (
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
          <Button onClick={onPaste} variant="outlined" sx={buttonSx}>
            <Image src="/content_paste.svg" alt="Paste" width={24} height={24} />
            Paste Text
          </Button>

          <Button onClick={onSample} variant="outlined" sx={buttonSx}>
            <Image src="/content_sample.svg" alt="Sample" width={24} height={24} />
            Sample Text
          </Button>
        </Box>
      )}
    </>
  );
}
