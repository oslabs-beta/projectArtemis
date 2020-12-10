export interface Result {
  apis: {};
  responseTimeAvg: string;
  responseTimeMax: string;
  sizeAvg: string;
  sizeMax: string;
  queryTotal: any;
  queryFrequency: number;
  errorFrequency: number;
}

export interface Snapshot {
  api: string;
  responseTime: number;
  dataSize: number;
  requestedFields: [];
  successfulQuery: boolean;
  errors: {
    messages: string;
    locations: [{ line: number; column: number }];
  };
  extensions: { code: string };
}