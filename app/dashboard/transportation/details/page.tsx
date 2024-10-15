"use client";
import { FilledButton } from "@/components/Button";
import ActiveRecords from "@/components/clearance/details/ActiveRecords";
import Details from "@/components/clearance/details/Details";
import FinancialMovements from "@/components/clearance/details/FinancialMovements";
import NotesAndDocuments from "@/components/clearance/details/NotesAndDocuments";
import OperationSummary from "@/components/clearance/details/OperationSummary";
import PurchaseInvoice from "@/components/clearance/details/PurchaseInvoice";
import Quotation from "@/components/clearance/details/Quotations";
import SalesInvoice from "@/components/clearance/details/SalesInvoice";
import TrackAction from "@/components/clearance/details/TrackAction";
import {
  DropDownFade,
  DropDownSearchFade,
  FileInputFade,
  FileInputFade2,
  MultipleDropDownSearchFade,
  PreviewFileInputFade,
  TextArea,
} from "@/components/Input";
import Modal from "@/components/Modal";
import { GlobalContext } from "@/context/context";
import { containers, documentType, statuses } from "@/data";
import { ArrowDown2, Size } from "iconsax-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "postcss";
import { useContext, useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const router = useRouter();
  const search = useSearchParams();
  const tab = new URLSearchParams(search).get("tab");

  const { openDoc, setOpenDoc, openAction, setOpenAction } =
    useContext(GlobalContext);

  const [docType, setDocType] = useState<string>("");
  const [openDocument, setOpenDocument] = useState<boolean>(true);
  const [content, setContent] = useState<string>("");
  const [container, setContainer] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["underline", "italic", "bold", "strike", "blockquote"],
      [{ size: ["small", false, "large", "huge"] }],
      [{ align: [false, "right", "center"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: [false] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  useEffect(() => {
    if (tab) {
      return;
    }

    router.push("?tab=details");
  }, []);

  return (
    <div className="w-full">
    

      <Modal isOpen={openAction} setIsOpen={setOpenAction}>
        <div className="w-[840px] min-w-[840px] min-h-[400px] max-h-[800px] slim-scroll bg-white relative">
          {/* HEader Bar */}

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-4">
              <h4 className="font-medium text-[22px] text-grey1000">
                Take Action
              </h4>
            </div>
          </div>

          <div className="px-10 pt-6 w-full grid grid-cols-2 gap-10">
            <DropDownFade
              type="text"
              placeholder="Action Type"
              data={documentType}
              value={docType}
              setValue={setDocType}
            />

            <div className="w-full flex items-center gap-[10px]">
              <Image
                src={require("@/assets/icons/warning-circle.svg")}
                alt="information"
                className="w-8 h-8"
              />
              <p className="text-[13px] text-dark600 leading-4">
                Note: Some statuses cannot be updated unless a <br /> specific
                document is uploaded
              </p>
            </div>
          </div>

          {docType === "Change Container Status" && (
            <div className="px-10 pt-6 w-full mt-4 mb-[62px]">
              <h4 className="text-black font-medium text-lg mb-4">
                Change Container Status
              </h4>
              <div className="w-full grid grid-cols-2 gap-10">
                <MultipleDropDownSearchFade
                  type="text"
                  label="Status"
                  placeholder="Change Status"
                  data={statuses}
                  value={status}
                  setValue={setStatus}
                />
                <DropDownSearchFade
                  type="text"
                  label="Container"
                  placeholder="Select Container"
                  data={containers}
                  value={container}
                  setValue={setContainer}
                />
              </div>
            </div>
          )}

          <div className="px-10 pt-6 w-full grid grid-cols-2 gap-10">
            <FileInputFade2
              id=""
              placeholder="Upload Documents"
              value
              label="Add Documents"
            />

            <div className="w-full">
              <DropDownFade
                type="text"
                placeholder="Select"
                label="Document Name"
                data={documentType}
                setValue={() => {}}
              />
            </div>
          </div>

          <div className="px-10 pt-6 bg-white flex gap-[26px]">
            <TextArea
              type="text"
              //   value={customer}
              setValue={() => {}}
              label="Remarks"
              placeholder="Enter Remark"
              iClass="h-[84px] text-base"
            />
          </div>
          <div className="px-10 pt-4 bg-white flex gap-[26px]">
            <div className="w-full input-wrap">
              <label className="labelsFade text-grey900">
                Images/Attachments
              </label>
              <div className="w-full grid grid-cols-4 gap-3">
                <div className="w-full aspect-[1.13]">
                  <PreviewFileInputFade
                    id=""
                    placeholder="Upload"
                    value
                    label="Add Documents"
                  />
                </div>
                <div className="w-full aspect-[1.13]">
                  <PreviewFileInputFade
                    id=""
                    placeholder="Upload"
                    value
                    label="Add Documents"
                  />
                </div>
                <div className="w-full aspect-[1.13]">
                  <PreviewFileInputFade
                    id=""
                    placeholder="Upload"
                    value
                    label="Add Documents"
                  />
                </div>
                <div className="w-full aspect-[1.13]">
                  <PreviewFileInputFade
                    id=""
                    placeholder="Upload"
                    value
                    label="Add Documents"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-10 my-10 bg-white flex items-center justify-end gap-6">
            <FilledButton
              text="Save as draft"
              //   image={require("../../assets/icons/add-sec700.svg")}
              btnClass="rounded !w-fit px-4 !h-fit"
              pClass="font-normal text-grey900 text-lg"
              cta={() => {}}
            />
            <FilledButton
              text="Save"
              btnClass="bg-primary rounded !w-fit px-7 !h-fit"
              pClass="font-normal text-white text-lg"
              cta={() => {}}
            />
          </div>
        </div>
      </Modal>

      {tab === "details" && <Details />}
      {tab === "sales-invoices" && <SalesInvoice />}
      {tab === "purchase-invoices" && <PurchaseInvoice />}
      {tab === "quotation" && <Quotation />}
      {tab === "notes/documents" && <NotesAndDocuments />}
      {tab === "track-action" && <TrackAction />}
      {tab === "active-record" && <ActiveRecords />}
      {tab === "financial-movements" && <FinancialMovements />}
      {tab === "operations-summary" && <OperationSummary />}
    </div>
  );
};

export default Page;
