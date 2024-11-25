import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data: users, isLoading } = useQuery({
    queryFn: () => fetchUsers(),
    queryKey: ["users"],
    staleTime: 24 * 60 * 60 * 1000,
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {users?.map((user: any) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
