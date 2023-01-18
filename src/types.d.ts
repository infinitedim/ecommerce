export interface HttpResponse<T> {
  status: string;
  statusCode: number;
  message: string;
  data?: T;
}

export interface UseSliderTypes {
  nextSlide: () => void;
  prevSlide: () => void;
  currentSlide: number;
  maxSlide: number;
}

export interface UseSliderParameterTypes {
  ref: any;
  isLoadingData?: boolean | undefined;
}

export interface ProductCardParameterTypes {
  isSkeleton?: boolean | undefined;
  productName?: string | undefined;
  productPrice?: string | undefined;
  productImage?: string | undefined;
  id?: string | undefined;
}

export interface UserRegisterRequestBodyTypes {
  name: string;
  email: string;
  password: string;
}

export type UserLoginRequestBodyTypes = Pick<
  UserRegisterRequestBodyTypes,
  "email" | "password"
>;

export interface UserLoginResponseTypes {
  accessToken: string;
  refreshToken: string;
}
