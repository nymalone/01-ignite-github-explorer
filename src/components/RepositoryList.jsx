import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]); // é legal começar o estado com uma variável do mesmo tipo daquela que eu vou armazenar

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository =>  <RepositoryItem key={repository.name} repository={repository} />)}
      </ul>
    </section>
  );
}
