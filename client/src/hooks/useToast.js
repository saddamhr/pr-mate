import { useState } from 'react';

export const useToast = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000); // Toast visibility duration (3 seconds)
  };

  return { toastVisible, showToast };
};
