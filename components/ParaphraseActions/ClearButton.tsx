'use client';

import Image from 'next/image';

import { Button } from '@mui/material';
import { useTheme } from '@mui/system';
import { customTypography } from '@/theme';

import { ClearButtonProps } from '@/types';

export default function ClearButton({ onClearAction }: ClearButtonProps) {
  const theme = useTheme();

  return (
    <Button
      onClick={onClearAction}
      startIcon={<Image src="/close.svg" alt="clear input" width={24} height={24} />}
      sx={{
        padding: '10px 16px',
        borderRadius: '51px',
        border: 'unset',
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.primary.main,
        textTransform: 'none',
        ...customTypography.buttonAction,
      }}
    >
      Clear input
    </Button>
  );
}
