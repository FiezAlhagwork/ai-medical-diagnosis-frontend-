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
import type { DURATIONS, SEVERITIES } from "../constant";
import type { Doctor } from "./Doctor";

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



export type DoctorCardProps = {
  item: Doctor;
};

export type DoctorStatProps = {
  id?: string;
  label: string;
  value: string | undefined;
  Icon: IconType;
  bgColor: string;
  textColor: string;
};

export type Lang = "ar" | "en";

export type SymptomsTextareaProps = {
  register: UseFormRegisterReturn;
  errors?: FieldError;
  symptomsText: string;
};

export type QuickSymptomsSelectorProps = {
  value: string[];
  onToggle: (id: string) => void;
  errors: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};

export type Duration = (typeof DURATIONS)[number];

export type DurationSelectorProps = {
  value: Duration;
  onSelect: (val: Duration) => void;
  errors: Merge<FieldError, (FieldError | undefined)[]> | undefined;
  lang: Lang;
};

export type Severity = (typeof SEVERITIES)[number];
export type SeveritySelectorProps = {
  value?: Severity;
  onSelect: (val: Severity) => void;
  errors: Merge<FieldError, (FieldError | undefined)[]> | undefined;
};


export type DiagnosisCardProps = {
  _id: string,
  possible_condition: string,
  createdAt: string,
  confidence: string

}


export type DoctorResultsProps = {
  specialty: string;
  city?: string;
  province?: string;
};

export type LoadingProps = {
  title?: string;
  message?: string;
  fullScreen?: boolean;
  icon?: IconType;
};