import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "Rui", clientProjectId: "projectA" },
    });
  }
  return (
    <div>
      <h1>The Projects of a Given Cliente</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
