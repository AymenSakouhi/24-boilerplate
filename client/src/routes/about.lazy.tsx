import { createLazyFileRoute } from "@tanstack/react-router";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return <div>About!</div>;
};

export const Route = createLazyFileRoute("/about")({
  component: About,
});
