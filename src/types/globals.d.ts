export {};

declare global {
  interface CustomJwtSessionClaims {
    userId?: string;
  }
}
