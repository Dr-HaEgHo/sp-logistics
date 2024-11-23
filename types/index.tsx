import React from "react";

export interface emailInputProps {
  label: string;
  placeholder: string;
  type: string;
  setValue: Function;
}

export interface socialType {
  data: {
    id: number;
    text: string;
    to: string;
    image: "string";
    description: string;
    channel: string;
  };
  btnClass?: string;
}

export interface emailInputPropsFade {
  id?: string;
  label?: string;
  placeholder: string;
  type: string;
  setValue?: Function;
  value?: any;
  error?: string | undefined;
  isDisabled?: boolean;
  lClass?: string;
  iClass?: string;
  iwClass?: string;
  touched?: boolean | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  blur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export interface textAreaProps {
  id?: string;
  label?: string;
  placeholder: string;
  type: string;
  setValue: Function;
  value?: any;
  error?: string | undefined;
  isDisabled?: boolean;
  lClass?: string;
  iClass?: string;
  iwClass?: string;
  touched?: boolean | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  blur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export interface plateInputPropsFade {
  id?: string;
  label?: string;
  placeholder: string;
  type: string;
  setValue?: Function;
  value?: any;
  value1?: any;
  value2?: any;
  value3?: any;
  error?: string | undefined;
  isDisabled?: boolean;
  lClass?: string;
  iClass?: string;
  iwClass?: string;
  touched?: boolean | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  blur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export interface prefixInputPropsFade {
  id?: string;
  label?: string;
  placeholder: string;
  placeholder2: string;
  type: string;
  type2: string;
  setValue?: Function;
  setValue2?: Function;
  value?: any;
  value2?: any;
  error?: string | undefined;
  isDisabled?: boolean;
  lClass?: string;
  iClass?: string;
  touched?: boolean | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  blur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export interface pwInputProps {
  id: string;
  label?: string;
  placeholder: string;
  setValue?: Function;
  value: any;
  error?: string | undefined;
  cta?: () => void;
  isDisabled?: boolean;
  removeIcon?: boolean;
  lClass?: string;
  iClass?: string;
  type?: string;
  touched?: boolean | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  blur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}
export interface fileInputProps {
  id: string;
  label?: string;
  placeholder: string;
  setValue?: Function;
  value?: any;
  error?: string | undefined;
  cta?: () => void;
  isDisabled?: boolean;
  removeIcon?: boolean;
  lClass?: string;
  iClass?: string;
  type?: string;
  touched?: boolean | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  blur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export interface searchInputProps {
  placeholder: string;
  type: string;
  value: string;
  setValue: Function;
}

export interface dropDownProps {
  label?: string;
  placeholder: string;
  type: string;
  data: {
    id: number;
    name: string;
  }[];
  value?: string;
  setValue: Function;
  iClass?: string;
  iwClass?: string;
}

export interface multipleDropDownProps {
  label?: string;
  placeholder: string;
  type: string;
  data: {
    title: string;
    list: {
      id: number;
      name: string;
    }[];
  }[];
  value?: string;
  setValue: Function;
  iClass?: string;
  iwClass?: string;
};

export interface dropDownPropsFade {
  label: string;
  placeholder: string;
  type: string;
  data: any;
  setValue: Function;
  value: any;
  error?: string;
}

export interface sidebarLink {
  id: number;
  title: String;
  route: String;
}

export interface incubateeData {
  name: string;
  LGA: string;
  phoneNumber: number;
  status: string;
  date: string;
  time: string;
}

export interface loginDetails {
  request: string;
  access: string;
}

export interface fileUploadProps {
  label: string;
  setSelectedImage: Function;
}

export interface fetchType {
  method: string;
  url: string;
  // headers?: {}
}

export interface signUpType {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface loginType {
  email: string;
  password: string;
  confirmPassword?: string;
}

export type statusType = "pending" | "done" | "failed";

export interface IndicatorProps {
  text: string;
  status: statusType;
}

export interface courseData {
  id: string;
  videos: string;
  title: string;
  isCompleted: boolean;
  instructor: string;
  total: number;
  completed: number;
  photo: string;
}

export interface onboardingPanelProps {
  data: onboardingCourses;
  action: () => void;
  loading: boolean;
  // setIsPlaying :  Function;
  // setCurrentId: Function;
}

export interface SWWType {
  action?: () => void;
  actionText?: string;
  message?: string;
}

export interface CardData {
  data: onboardingCourses;
  action: () => void;
}

export interface OngoingCardData {
  data: innerCourses;
  action: () => void;
}

export interface CourseProps {
  ongoing: onboardingCourses[];
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: Function;
  children: React.ReactNode;
}

export interface UserDetails {
  id: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  created_at: string | null;
  photo: string | null;
  user_type: string | null;
  phone_number: string | null;
}

export interface lessonType {
  id: number;
  title: string;
  content: string;
  duration: string;
  video_url: string;
  course: string;
  is_completed: boolean;
}
export interface onboardingData {
  data: {
    id: string;
  };
}

interface instructorProps {
  first_name: string;
  last_name: string;
}

export interface innerCourses {
  id: string;
  lessons: lessonType[];
  completed_lessons_count: number;
  total_lessons_count: number;
  completed_modules_count: number;
  total_modules_count: number;
  lessons_completion_percentage: number;
  cover_image: number;
  title: number;
  description: string;
  is_completed: boolean;
  instructor: instructorProps;
}
export interface onboardingCourses {
  id: string;
  course?: innerCourses;
  lessons: lessonType[];
  completed_lessons_count: number;
  total_lessons_count: number;
  completed_modules_count: number;
  total_modules_count: number;
  lessons_completion_percentage: number;
  cover_image: number;
  title: number;
  lesson_count: number;
  description: string;
  is_completed: boolean;
  instructor: instructorProps;
}

export interface resultsData {
  id: string;
  course: string;
  last_message: {
    id: string;
    sender: string;
    text: string;
    created_at: string;
  };
}

export type chatRoomsData = {
  results: resultsData[];
};

export interface sender {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  photo: string;
  user_type: string;
  phone_number: string | null;
}

export interface messagesData {
  id: string;
  sender: sender;
  text: string;
  created_at: string;
}

export interface chatDetailsData {
  id: string;
  course: string;
  students: string[];
  messages: messagesData[];
}

export interface button {
  cta?: () => void;
  text?: string;
  pClass?: string;
  btnClass?: string;
  image?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface DeliveryProps {
  acctNo: string;
  name: string;
  city?: string;
  address: string;
  contact?: string;
}
