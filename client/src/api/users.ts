import { USET_TYPE } from '../types/types';

export const fetchUsers = async () => {
  const result = await fetch('/api/users', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const jsonResult = (await result.json()) || [];
  return jsonResult;
};

export const createUser = async (user: USET_TYPE) => {
  const { name, age, email } = user;
  const result = await fetch('/api/create/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      age,
      email,
    }),
  });
  const jsonResult = (await result.json()) || [];
  return jsonResult;
};
