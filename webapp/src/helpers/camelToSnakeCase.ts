export default string => string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
