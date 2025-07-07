'use client';

import { memo } from 'react';
import { Stack } from '@mui/material';

import ClearButton from './ClearButton';
import ParaphraseButton from './ParaphraseButton';
import { ParaphraseActionsProps } from '@/types';

const ParaphraseActions = memo(function ParaphraseActions({
  status,
  onClear,
  onParaphrase,
}: ParaphraseActionsProps) {
  const isDisabled = status !== 'ready';
  const showClear = ['ready', 'success', 'error'].includes(status);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '0 0 28px 28px',
        border: '1px solid #DBDCDF',
        borderTop: 0,
        padding: '8px',
      }}
    >
      {showClear && <ClearButton onClearAction={onClear} />}
      <ParaphraseButton
        onParaphraseAction={onParaphrase}
        isParaphraseDisabled={isDisabled}
        isLoading={status === 'loading'}
      />
    </Stack>
  );
});

export default ParaphraseActions;
