export class CreateUserDto {
  readonly first_name: string;
  readonly last_name: string;
  readonly phone: number;
  readonly email: string;
  readonly password: string;
  readonly staus: string;
  readonly mermber_since: Date;
}
