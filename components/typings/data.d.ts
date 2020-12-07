export interface Result {
  apis: {};
  latencyAvg: string;
  latencyMax: string;
  sizeAvg: string;
  sizeMax: string;
  queryTotal: any;
  queryFrequency: number;
  errorFrequency: number;
}

export interface Snapshot {
  api: string;
  latency: number;
  dataSize: number;
  requestedFields: [];
  successfulQuery: boolean;
  errors: {
    messages: string;
    locations: [{ line: number; column: number }];
  };
  extensions: { code: string };
}