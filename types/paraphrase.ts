export type ParaphraseStatus = 'initial' | 'ready' | 'loading' | 'success' | 'error';

export type ClearButtonProps = {
  onClearAction: () => void;
};

export type ParaphraseTextareaProps = {
  value: string;
  onChange: (val: string) => void;
  isLoading: boolean;
  onPaste: () => void;
  onSample: () => void;
};

export type ParaphraseActionsProps = {
  onClear: () => void;
  onParaphrase: () => void;
  isParaphraseDisabled: boolean;
  isLoading: boolean;
  shouldShowClear: boolean;
};

export type ParaphraseButtonProps = {
  onParaphraseAction: () => void;
  isParaphraseDisabled: boolean;
  isLoading: boolean;
};
