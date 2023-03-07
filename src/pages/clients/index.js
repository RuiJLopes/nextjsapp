import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "Rui", name: "Rui" },
    { id: "Max", name: "Maximilian" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              {/* This one way of specifying the pathname */}
              {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
              {/* Next.js allows us to specfy links/path this way */}
              <Link
                href={{ pathname: "/clients/[id]", query: { id: client.id } }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
