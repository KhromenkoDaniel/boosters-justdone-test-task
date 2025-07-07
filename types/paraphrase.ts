export type ParaphraseStatus = 'initial' | 'ready' | 'loading' | 'success' | 'error';

export type ClearButtonProps = {
  onClearAction: () => void;
};

export type ParaphraseTextareaProps = {
  status: ParaphraseStatus;
  value: string;
  onStatusChangeAction: (text: string) => void;
  onTextChangeAction: (text: string) => void;
};

export type ParaphraseButtonProps = {
  onParaphraseAction: () => void;
  isParaphraseDisabled: boolean;
  isLoading: boolean;
};

export type ParaphraseActionsProps = {
  status: ParaphraseStatus;
  onClear: () => void;
  onParaphrase: () => void;
};

export type State = {
  status: ParaphraseStatus;
  error: string | null;
};

export type Action =
  | { type: 'SET_STATUS'; payload: ParaphraseStatus }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR' };
