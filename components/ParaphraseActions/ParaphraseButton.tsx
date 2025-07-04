'use client';

import { Button } from '@mui/material';
import { useTheme } from '@mui/system';
import { customTypography } from '@/theme';

import { ParaphraseButtonProps } from '@/types';

export default function ParaphraseButton({
  onParaphraseAction,
  isParaphraseDisabled,
  isLoading,
}: ParaphraseButtonProps) {
  const theme = useTheme();

  const disabledStyles = {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.primary.contrastText,
  };

  const activeStyles = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  };

  const currentStyles = isParaphraseDisabled || isLoading ? disabledStyles : activeStyles;

  return (
    <Button
      onClick={onParaphraseAction}
      disabled={isParaphraseDisabled}
      sx={{
        padding: '10px 16px',
        borderRadius: '51px',
        border: 'unset',
        boxShadow: 'none',
        textTransform: 'none',
        minWidth: '111px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '8px',
        ...customTypography.buttonAction,
        ...currentStyles,
        '&.Mui-disabled': {
          ...currentStyles,
        },
      }}
    >
      {isLoading ? 'Paraphrasing…' : 'Paraphrase'}
    </Button>
  );
}
