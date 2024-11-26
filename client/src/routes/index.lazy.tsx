import { createLazyFileRoute } from '@tanstack/react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUsers, createUser } from '../api/users';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const queryClient = useQueryClient();
  const { data: users, isLoading } = useQuery({
    queryFn: () => fetchUsers(),
    queryKey: ['users'],
    staleTime: 24 * 60 * 60 * 1000,
  });

  const mutation = useMutation({
    mutationFn: function (e: React.FormEvent<HTMLFormElement>) {
      const formData = new FormData(e.target as HTMLFormElement);
      const name = formData.get('userName');
      const age = formData.get('userAge');
      const email = formData.get('userEmail');
      return createUser({ name, age: parseInt(age), email });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {users?.map((user: any) => <div key={user.id}>{user.name}</div>)}
      {mutation.isSuccess ? (
        <h3>Submitted</h3>
      ) : (
        <form onSubmit={mutation.mutate}>
          <label htmlFor="userName">Name</label>
          <input type="text" name="userName" id="userName" />
          <label htmlFor="userAge">Age</label>
          <input type="number" name="userAge" id="userAge" />
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="userEmail" id="userEmail" />
          <button>submit</button>
        </form>
      )}
    </div>
  );
}
