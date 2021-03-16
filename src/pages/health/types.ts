export interface IProps {
  healthCheck: IHealthCkeck;
  errorCode: number | boolean;
}

export interface IHealthCkeck {
  message: string;
  status: number;
}
