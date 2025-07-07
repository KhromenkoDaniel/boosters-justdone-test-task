export function getValidateText(text: string): string | null {
  const trimmed = text.trim();

  if (!trimmed) {
    return 'Text cannot be empty.';
  }

  const wordCount = trimmed.split(/\s+/).length;

  if (wordCount < 10) {
    return 'Text must contain at least 10 words.';
  }

  if (wordCount > 150) {
    return 'Text must not exceed 150 words.';
  }

  const charCount = trimmed.length;

  if (charCount > 2000) {
    return 'Text must not exceed 2000 characters.';
  }

  return null;
}
