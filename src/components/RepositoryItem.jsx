export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description ?? "none"}</p>

      <a href="">{repository?.url ?? "invalid"}</a>
    </li>
  );
}
