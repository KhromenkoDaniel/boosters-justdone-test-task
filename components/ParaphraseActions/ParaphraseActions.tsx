import { Stack } from '@mui/material';

import ClearButton from './ClearButton';
import ParaphraseButton from './ParaphraseButton';

import { ParaphraseActionsProps } from '@/types';

export default function ParaphraseActions({
  onClear,
  onParaphrase,
  isParaphraseDisabled,
  isLoading,
  shouldShowClear,
}: ParaphraseActionsProps) {
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
      {shouldShowClear && <ClearButton onClearAction={onClear} />}
      <ParaphraseButton
        onParaphraseAction={onParaphrase}
        isParaphraseDisabled={isParaphraseDisabled}
        isLoading={isLoading}
      />
    </Stack>
  );
}
