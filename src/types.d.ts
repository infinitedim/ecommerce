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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export interface BreakpointType {
  name: string;
  min: number;
  max: number;
}

export interface AuthSliceTypes {
  token: string;
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
  };
}

export interface ProductTypes {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
