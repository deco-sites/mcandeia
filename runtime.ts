import { forApp } from "$live/clients/withManifest.ts";
import type { Blog } from "./apps/site.ts";

export const Runtime = forApp<Blog>();
