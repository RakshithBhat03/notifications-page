export const getUnread = (data) => {
  const count = data.reduce((acc, curr) => {
    if (!curr.isRead) {
      return (acc += 1);
    }
    return acc;
  }, 0);
  return count;
};
