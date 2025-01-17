export const copyToClipboard = (text, showToast) => {
  if (text) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast())
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }
};
