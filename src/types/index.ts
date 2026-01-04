/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import type { Dispatch, JSX, RefObject, SetStateAction } from "react";
import type {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import type { IconType } from "react-icons/lib";

export type TextFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  classNameButton?: string;
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
};

export type Options = {
  value: string;
  label: string;
};
export type SelectFieldProps = {
  label: string;
  options: string[] | Options[];
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

type AvatarGroupList = {
  id: number;
  img: string;
  className: string;
};
export type AvatarGroupProps = {
  AvatarGroupList: AvatarGroupList[];
};

export type TypewriterProps = {
  messages: string[];
  typingSpeed?: number; // مدة كتابة النص
  deletingSpeed?: number; // مدة مسح النص
  delay?: number; // وقت الانتظار بين الكتابة والمسح
};

export type UseTypewriter = TypewriterProps & {
  textRef: RefObject<HTMLHeadingElement | null>;
};

type items = {
  id: number;
  icons: React.ReactNode;
  title: string;
  text: string;
};
export type MedicalSolutionCardProps = {
  item: items;
  setActiveMedicalSolutions: Dispatch<SetStateAction<number>>;
  activeMedicalSolutions: number;
};

export type TitleProps = {
  icons: React.ReactNode;
  title: string;
};

type Item = {
  id: number;
  name: string;
  icon: JSX.Element;
  styleCustom: string;
};
export type SpecialtyCardProps = {
  item: Item;
  browseDoctor: string;
};

export type Doctor = {
  id: number;
  image: string;
  name: string;
  specialty: string;
  province: string;
  rating: number;
};

export type DoctorCardProps = {
  item: Doctor;
};


export type DoctorStatProps = {
  id?:string ,
  label:string ,
  value: string ,
  Icon: IconType,
  bgColor:string ,
  textColor: string,
}


export type Lang = "ar" | "en";