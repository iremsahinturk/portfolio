/// <reference types="vite/client" />

// This file is used to define the types of the environment variables (import.meta.env) that are available in our Vite application.
interface ImportMetaEnv {
  readonly VITE_APP_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
