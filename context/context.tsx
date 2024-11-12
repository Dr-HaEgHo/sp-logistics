"use client";

import { courseData, messagesData, onboardingCourses } from "@/types";
import React, {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
  useReducer,
  useEffect,
} from "react";

// type DataType = {
//     isActive: boolean
// }
interface messageType {
  message: string;
  chat_id: string;
}

interface ContextProps {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  mainSidebarOpen: boolean;
  setMainSidebarOpen: Dispatch<SetStateAction<boolean>>;
  currentCourse: onboardingCourses | null;
  setCurrentCourse: Dispatch<SetStateAction<onboardingCourses | null>>;
  nowPlaying: string | null;
  setNowPlaying: Dispatch<SetStateAction<string | null>>;
  picture: string | null;
  setPicture: Dispatch<SetStateAction<string | null>>;
  openChatNav: boolean;
  setOpenChatNav: Dispatch<SetStateAction<boolean>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  messages: messagesData[] | null;
  setMessages: Dispatch<SetStateAction<messagesData[] | null>>;
  chatId: string;
  setChatId: Dispatch<SetStateAction<string>>;
  appHeaderInfo: string;
  setAppHeaderInfo: Dispatch<SetStateAction<string>>;
  headerInfo: string;
  setHeaderInfo: Dispatch<SetStateAction<string>>;
  infoMsg: string;
  setInfoMsg: Dispatch<SetStateAction<string>>;
  layout: string;
  setLayout: Dispatch<SetStateAction<string>>;
  openDoc: boolean;
  setOpenDoc: Dispatch<SetStateAction<boolean>>;
  openAction: boolean;
  setOpenAction: Dispatch<SetStateAction<boolean>>;
  openReceipt: boolean;
  setOpenReceipt: Dispatch<SetStateAction<boolean>>;
  openDeliveryProof: boolean;
  setOpenDeliveryProof: Dispatch<SetStateAction<boolean>>;
  barcodeContainer: boolean;
  setBarcodeContainer: Dispatch<SetStateAction<boolean>>;
}

// const initialState = {
//     todos: [],
// };

export const GlobalContext = createContext<ContextProps>({
  isActive: "",
  setIsActive: (): string => "",
  isSidebarOpen: false,
  setIsSidebarOpen: (): boolean => false,
  mainSidebarOpen: false,
  setMainSidebarOpen: (): boolean => false,
  currentCourse: null,
  setCurrentCourse: (): courseData | null => null,
  nowPlaying: null,
  setNowPlaying: (): courseData | null => null,
  picture: null,
  setPicture: (): string | null => null,
  openChatNav: false,
  setOpenChatNav: (): boolean => false,
  message: "",
  setMessage: (): string => "",
  messages: null,
  setMessages: (): messagesData[] | null => null,
  chatId: "",
  setChatId: (): string => "",
  appHeaderInfo: "",
  setAppHeaderInfo: (): string => "",
  headerInfo: "",
  setHeaderInfo: (): string => "",
  infoMsg: "",
  setInfoMsg: (): string => "",
  layout: "",
  setLayout: (): string => "",
  openDoc: false,
  setOpenDoc: (): boolean => false,
  openAction: false,
  setOpenAction: (): boolean => false,
  openReceipt: false,
  setOpenReceipt: (): boolean => false,
  openDeliveryProof: false,
  setOpenDeliveryProof: (): boolean => false,
  barcodeContainer: false,
  setBarcodeContainer: (): boolean => false,

});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentCourse, setCurrentCourse] = useState<onboardingCourses | null>(
    null
  );
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);
  const [picture, setPicture] = useState<string | null>(null);
  const [mainSidebarOpen, setMainSidebarOpen] = useState<boolean>(false);
  const [openChatNav, setOpenChatNav] = useState<boolean>(false);
  const [messages, setMessages] = useState<messagesData[] | null>(null);
  const [message, setMessage] = useState<string>("");
  const [chatId, setChatId] = useState<string>("");
  const [infoMsg, setInfoMsg] = useState<string>("");
  const [headerInfo, setHeaderInfo] = useState<string>("");
  const [appHeaderInfo, setAppHeaderInfo] = useState<string>("");
  const [layout, setLayout] = useState<string>("");
  const [openDoc, setOpenDoc] = useState<boolean>(false);
  const [openAction, setOpenAction] = useState<boolean>(false);
  const [openReceipt, setOpenReceipt] = useState<boolean>(false);
  const [openDeliveryProof, setOpenDeliveryProof] = useState<boolean>(false);
  const [ barcodeContainer, setBarcodeContainer ] = useState<boolean>(false)

  return (
    <GlobalContext.Provider
      value={{
        isActive,
        setIsActive,
        isSidebarOpen,
        setIsSidebarOpen,
        currentCourse,
        setCurrentCourse,
        nowPlaying,
        setNowPlaying,
        picture,
        setPicture,
        mainSidebarOpen,
        setMainSidebarOpen,
        openChatNav,
        setOpenChatNav,
        message,
        setMessage,
        messages,
        setMessages,
        chatId,
        setChatId,
        headerInfo,
        setHeaderInfo,
        appHeaderInfo,
        setAppHeaderInfo,
        infoMsg,
        setInfoMsg,
        layout,
        setLayout,
        openDoc,
        setOpenDoc,
        openAction,
        setOpenAction,
        openReceipt,
        setOpenReceipt,
        openDeliveryProof,
        setOpenDeliveryProof,
        barcodeContainer,
        setBarcodeContainer
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// export const useGlobalContext = useContext(GlobalContext);
