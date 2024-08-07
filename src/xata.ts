// Generated by Xata Codegen 0.29.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "n8n",
    columns: [
      { name: "sessionId", type: "string" },
      { name: "type", type: "string" },
      { name: "role", type: "string" },
      { name: "content", type: "text" },
      { name: "name", type: "string" },
      { name: "additionalKwargs", type: "text" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type N8n = InferredTypes["n8n"];
export type N8nRecord = N8n & XataRecord;

export type DatabaseSchema = {
  n8n: N8nRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://nexttech3-s-workspace-ofk4sv.us-east-1.xata.sh/db/n8n",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
