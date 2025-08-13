export interface ServerStatusInterface {
  online: boolean;
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
  icon?: string;
}
