export interface ServerStatusInterface {
  ip: string;
  port?: number;
  online: boolean;
  hostname?: string;
  debug: {
    ping: boolean;
    query: boolean;
    bedrock: boolean;
    srv: boolean;
    querymismatch: boolean;
    ipinsrv: boolean;
    cnameinsrv: boolean;
    animatedmotd: boolean;
    cachehit: boolean;
    cachetime: number;
    cacheexpire: number;
    apiversion: number;
    dns?: {
      srv: Array<{
        name: string;
        type: string;
        class: string;
        ttl: number;
        rdlength: number;
        rdata: string;
        priority: number;
        weight: number;
        port: number;
        target: string;
      }>;
      srv_a: Array<{
        name: string;
        type: string;
        class: string;
        ttl: number;
        rdlength: number;
        rdata: string;
        address: string;
      }>;
    };
    error?: {
      query: string;
    };
  };
  motd?: {
    raw: string[];
    clean: string[];
    html: string[];
  };
  players?: {
    online: number;
    max: number;
    list: Array<{
      name: string;
      uuid: string;
    }>;
  };
  version?: string;
  protocol?: {
    version: number;
    name: string;
  };
  icon?: string;
  eula_blocked?: boolean;
}
