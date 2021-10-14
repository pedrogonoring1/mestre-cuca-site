export class User {
  public id: string;
  public Name: string;
  public LastName: string;
  public LinkImage: string;
  public UserVerificad: boolean;

  constructor(params: Partial<User>) {
    this.id = params.id || '';
    this.Name = params.Name || '';
    this.LastName = params.LastName || '';
    this.LinkImage = params.LinkImage || '';
    this.UserVerificad = params.UserVerificad || false;
  }
}
