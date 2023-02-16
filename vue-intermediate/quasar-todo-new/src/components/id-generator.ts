const generateId = () => {
  const identifier = 'ID';
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10_000);
  return `${identifier}${timestamp}${random}`;
};

export default generateId;
