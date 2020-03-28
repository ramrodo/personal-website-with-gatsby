import React, { useState, useEffect } from "react"
import Repo from "../components/repo"

export default () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState(0)

  useEffect(() => {

    const data = sessionStorage.getItem("repos");

    if (data) {
      const repos = JSON.parse(data);
      setReposCount(repos.length);
      return setRepos(repos.slice(1,10));
    }

    async function fetchRepos () {
      const response = await fetch("https://api.github.com/users/ramrodo/repos");
      const repos = await response.json();

      sessionStorage.setItem("repos", JSON.stringify(repos));
      setRepos(repos.slice(1, 10));
      setReposCount(repos.length);
    }
    fetchRepos();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <header className="text-center">
        <h2 className="text-3xl font-bold">My contributions in Open Source</h2>
        <p>Repositories</p>
      </header>
      <ul className="repos-list">
        {
          repos.map((repo) => {
            return <Repo key={repo.id} repo={repo} />
          })
        }
      </ul>
      <div className="mt-8 text-center">
        <a href="https://github.com/ramrodo" className="btn" target="_blank" rel="noopener noreferrer">
          More in Github ({reposCount})
        </a>
      </div>
    </div>
  );
};

