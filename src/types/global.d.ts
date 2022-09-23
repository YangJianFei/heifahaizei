declare interface IEnv {
  env: Env;
  isDev: boolean;
  isPro: boolean;
  isTest: boolean
}

declare interface IData {
  [key: string]: any;
}

declare interface IApiResult {
  code: number;
  data?: any[] | IData;
  message: string;
}

interface IUser {
  userName: string;
  userLogo?: string;
  account?: string;
  showName?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

declare interface IMap {
  [key: string]: any;
}

declare module 'md5';