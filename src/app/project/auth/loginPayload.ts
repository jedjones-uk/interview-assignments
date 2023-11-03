export class LoginPayload {
  email: string;
  password: string;
  constructor() {
    this.email = 'martinluther@example.com';
    this.password = `${new Date().getTime()}`;
  }
}
