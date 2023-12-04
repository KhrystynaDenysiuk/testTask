export interface UsersState {
  users: readonly User[];
  user: User | null;
  totalPages: number;
}

export interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}
