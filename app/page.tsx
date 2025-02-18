"use client";
import { useState } from "react";

export default function Home() {
  const [githubPat, setGithubPat] = useState("");
  const [gitpodPat, setGitpodPat] = useState("");
  const [output, setOutput] = useState("");

  const handleCallGitpod = async () => {
    const response = await fetch(
      "https://api.catfood.gitpod.cloud/gitpod.v1.OrganizationService/ListOrganizations",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${gitpodPat}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    const data = await response.json();
    setOutput(JSON.stringify(data));
  };

  const handleCallGitpodViaLib = async () => {
    setOutput("Called Gitpod via library...");
    // Implementation will go here
  };

  const handleCallGithub = async () => {
    setOutput("Called GitHub...");
    // Implementation will go here
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="githubPat" className="font-medium">
                GitHub PAT
              </label>
              <input
                id="githubPat"
                type="password"
                value={githubPat}
                onChange={(e) => setGithubPat(e.target.value)}
                className="border rounded-md p-2"
                placeholder="Enter GitHub Personal Access Token"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="gitpodPat" className="font-medium">
                Gitpod PAT
              </label>
              <input
                id="gitpodPat"
                type="password"
                value={gitpodPat}
                onChange={(e) => setGitpodPat(e.target.value)}
                className="border rounded-md p-2"
                placeholder="Enter Gitpod Personal Access Token"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleCallGitpod}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Call Gitpod
            </button>
            <button
              onClick={handleCallGitpodViaLib}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Call Gitpod via lib
            </button>
            <button
              onClick={handleCallGithub}
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
            >
              Call GitHub
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="output" className="font-medium">
              Output
            </label>
            <textarea
              id="output"
              value={output}
              readOnly
              className="border rounded-md p-2 h-48"
              placeholder="Output will appear here..."
            />
          </div>
        </div>
      </main>
    </div>
  );
}
