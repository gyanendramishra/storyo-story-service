export interface UserById {
  id: string;
}

export interface RUser {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface UserList<T> {
  users: T[];
}
