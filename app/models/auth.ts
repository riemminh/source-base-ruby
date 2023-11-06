export interface AuthSignIn {
  username: string;
  password: string;
}
export interface ForgotPasswordResult {
  email: string;
}

export interface SignInSuccessResponse {
  access_expires: number;
  access_token: string;
  profile: {
    username: string;
    user_types: string[];
    email: string;
    first_name: string;
    last_name: string;
    birthday: string;
    id: number;
    is_tutorial_completed: boolean;
  };
  refresh_expires: number;
  refresh_token: string;
}
export interface SignInErrResponse {
  error_message: string;
  status: number;
}
