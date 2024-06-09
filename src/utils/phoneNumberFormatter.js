export const phoneNumberFormatterWithCursor = (
  mobileValue,
  cursorStart
) => {
  // Remove all non-numeric characters except hyphens
  let cleanValue = mobileValue.replace(/[^\d-]/g, "");

  // Remove hyphens that are not at the correct positions
  cleanValue = cleanValue.split("-").join("");

  // Track the position before formatting
  let newCursorPosition = cursorStart;

  // Insert hyphens at the correct positions
  if (cleanValue.length > 3) {
    cleanValue = cleanValue.slice(0, 3) + "-" + cleanValue.slice(3);
    if (cursorStart > 3) {
      newCursorPosition++;
    }
  }
  if (cleanValue.length > 7) {
    cleanValue = cleanValue.slice(0, 7) + "-" + cleanValue.slice(7);
    if (cursorStart > 7) {
      newCursorPosition++;
    }
  }

  // Limit the value to 11 characters
  cleanValue = cleanValue.slice(0, 11);

  // Adjust cursor position for the new format
  newCursorPosition = Math.min(newCursorPosition, cleanValue.length);

  return { formattedNumber: cleanValue, newCursorPosition };
};
