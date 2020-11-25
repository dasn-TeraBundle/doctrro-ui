
export interface User {
  readonly email: string;
  readonly name: string;
  readonly roles: string[];
  readonly active: boolean;
  readonly enabled: boolean;
}
