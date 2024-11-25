export const fetchUsers = async () => {
  const result = await fetch("/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResult = (await result.json()) || [];
  return jsonResult;
};
