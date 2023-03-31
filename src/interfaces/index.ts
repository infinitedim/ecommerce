/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { buttonVariants } from "@/libs";
import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";

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

export interface useCursorTypes {
  ref: any;
  onMouseMove: () => any;
}

export interface UseSliderParameterTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any;
  isLoadingData?: boolean | undefined;
}

export interface ProductCardParameterTypes {
  isSkeleton?: boolean;
  productName?: string;
  productPrice?: string;
  productImage?: string;
  id?: string | number;
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

export interface MenuItemsTypes {
  title: string;
  href: string;
}

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  height?: string;
  stroke?: string;
  width?: string;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export interface LocalStorageTypes {
  get: <T>(key: string) => T | null;
  set: (key: string, value: any) => void;
  remove: (key: string) => void;
  clear: () => void;
}
