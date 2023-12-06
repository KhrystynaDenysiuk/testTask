export interface TokenState {
  token: Token | null;
}

export interface Token {
  success: boolean;
  token: string;
}
