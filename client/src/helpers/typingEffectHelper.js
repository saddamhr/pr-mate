export const typeText = (text, setData, setLoading) => {
  let index = 0;
  let resultText = ''; // Accumulating the result in one variable

  const interval = setInterval(() => {
    resultText += text[index]; // Concatenate the character at the current index
    setData(resultText); // Update state with the accumulated text

    index++;
    if (index === text.length) {
      clearInterval(interval);
      setLoading(false); // Stop the loading indicator when done
    }
  }, 20); // Typing speed
};
