{pkgs}: {
  channel = "unstable";
  packages = [
    pkgs.nodejs_22
    pkgs.openssh
    pkgs.pnpm
    pkgs.fish
  ];
  idx.extensions = [
    "esbenp.prettier-vscode"
    "dbaeumer.vscode-eslint"
    "heybourn.headwind"
    "vincaslt.highlight-matching-tag"
    "ecmel.vscode-html-css"
    "bierner.markdown-mermaid"
    "ms-playwright.playwright"
    "formulahendry.auto-close-tag"
    "formulahendry.auto-rename-tag"
    "usernamehw.errorlens"
    "bradlc.vscode-tailwindcss"
    "jock.svg"
    "Gruntfuggly.todo-tree"
    "mechatroner.rainbow-csv"
    "Selemondev.vscode-shadcn-svelte"
    "svelte.svelte-vscode"
    "Chanzhaoyu.svelte-5-snippets"
  ];
  # Sets environment variables in the workspace
  env = {
    PORT = "5173";
  };
  idx.previews = {
    previews = {
      web = {
        command = [
          "pnpm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
