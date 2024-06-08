export const phoneNumberFormatter = (mobileValue) => {
  // Remove all non-numeric characters except hyphens
  mobileValue = mobileValue.replace(/[^\d-]/g, "");

  // Split the mobileValue into parts separated by hyphens
  const parts = mobileValue.split("-");

  // Filter out empty parts and keep only the first three parts
  const filteredParts = parts.filter(
    (part, index) => index < 3 && part !== ""
  );

  // Join the parts with hyphens
  mobileValue = filteredParts.join("-");

  // Insert hyphens at positions 4 and 8 if necessary
  if (mobileValue.length > 3 && mobileValue.charAt(3) !== "-") {
    mobileValue =
      mobileValue.slice(0, 3) + "-" + mobileValue.slice(3);
  }
  if (mobileValue.length > 7 && mobileValue.charAt(7) !== "-") {
    mobileValue =
      mobileValue.slice(0, 7) + "-" + mobileValue.slice(7);
  }

  // Limit the mobileValue length to 11 characters
  mobileValue = mobileValue.slice(0, 11);
  return mobileValue;
};
