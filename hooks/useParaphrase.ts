'use client';

import { useCallback, useState } from 'react';

import { SAMPLE_TEXT } from '@/utils/constants';
import { getValidateText } from '@/utils/getValidateText';
import { ParaphraseStatus } from '@/types';

export default function useParaphrase() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState<ParaphraseStatus>('initial');
  const [error, setError] = useState<string | null>(null);

  const handleClear = useCallback(() => {
    setText('');
    setError(null);
    setStatus('initial');
  }, []);

  const setReadyOrInitial = useCallback((value: string) => {
    if (value.trim()) {
      setStatus('ready');
    } else {
      setStatus('initial');
      setError(null);
    }
  }, []);

  const handleTextChange = useCallback(
    (value: string) => {
      setText(value);
      setReadyOrInitial(value);
    },
    [setReadyOrInitial]
  );

  const handlePaste = useCallback(async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      handleTextChange(clipboardText);
    } catch {
      setError('Failed to read from clipboard.');
    }
  }, [handleTextChange]);

  const handleSample = useCallback(() => handleTextChange(SAMPLE_TEXT), [handleTextChange]);

  const handleParaphrase = useCallback(async () => {
    const validationError = getValidateText(text);
    if (validationError) {
      setError(validationError);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError(null);

    try {
      const res = await fetch('/api/paraphrase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Paraphrase: ${text}` }),
      });

      if (!res.ok) {
        setError(`Server error: ${res.status}`);
        setStatus('error');
        return;
      }

      const data = await res.json();

      if (!data?.result) {
        setError('Invalid response from server.');
        setStatus('error');
        return;
      }

      setText(data.result);
      setStatus('success');
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : 'Unexpected error while contacting the server.';
      setError(msg);
      setStatus('error');
    }
  }, [text]);

  return {
    text,
    status,
    error,
    isLoading: status === 'loading',
    isParaphraseDisabled: status !== 'ready',
    shouldShowClear: ['ready', 'success', 'error'].includes(status),
    handleTextChange,
    handlePaste,
    handleSample,
    handleClear,
    handleParaphrase,
  };
}
