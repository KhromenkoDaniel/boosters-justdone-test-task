'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/system';
import { customTypography } from '@/theme';

type UploadActionButtonProps = {
  onClickAction: () => void;
  iconSrc: string;
  alt: string;
  label: string;
};

export default function UploadActionButton({
  onClickAction,
  iconSrc,
  alt,
  label,
}: UploadActionButtonProps) {
  const theme = useTheme();

  const sx = {
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
    <Button onClick={onClickAction} variant="outlined" sx={sx}>
      <Image src={iconSrc} alt={alt} width={24} height={24} />
      {label}
    </Button>
  );
}
