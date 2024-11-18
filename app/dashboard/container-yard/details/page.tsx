"use client";
import { FilledButton } from "@/components/Button";
import ActiveRecords from "@/components/clearance/details/ActiveRecords";
import FinancialMovements from "@/components/clearance/details/FinancialMovements";
import NotesAndDocuments from "@/components/clearance/details/NotesAndDocuments";
import PurchaseInvoice from "@/components/clearance/details/PurchaseInvoice";
import Quotation from "@/components/clearance/details/Quotations";
import ReceiptProof from "@/components/clearance/details/ReceiptProof";
import SalesInvoice from "@/components/clearance/details/SalesInvoice";
import TrackAction from "@/components/clearance/details/TrackAction";
import {
  DateInputFade,
  DropDownFade,
  FileInputFade2,
  InputFade,
  PlateInputFade,
  PreviewFileInputFade,
  TextArea,
  TimeInputFade,
} from "@/components/Input";
import Modal from "@/components/Modal";
import DeliveryProof from "@/components/warehouse/details/DeliveryProof";
import OperationSummary from "@/components/warehouse/details/OperationSummary";
import { GlobalContext } from "@/context/context";
import { ArrowDown2 } from "iconsax-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-phone-input-2/lib/style.css";
import { RadioCheck } from "@/components/CheckBox";
import PalletTable from "@/components/warehouse/details/PalletTable";
import ContainerDetails from "@/components/container/details/ContainerDetails";

const documentType = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const router = useRouter();
  const search = useSearchParams();
  const tab = new URLSearchParams(search).get("tab");

  const {
    openDoc,
    setOpenDoc,
    openAction,
    setOpenAction,
    openReceipt,
    setOpenReceipt,
    openDeliveryProof,
    setOpenDeliveryProof,
  } = useContext(GlobalContext);

  const [openDocument, setOpenDocument] = useState<boolean>(true);
  const [chooseCheck, setChooseCheck] = useState<boolean>(true);
  const [content, setContent] = useState<string>("");
  const [palletNo, setPalletNo] = useState<string>("");

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
      <Modal isOpen={openDoc} setIsOpen={setOpenDoc}>
        <div className="w-[840px] min-w-[840px] min-h-[400px] max-h-[90vh] slim-scroll bg-white relative">
          {/* HEader Bar */}

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-4">
              <h4 className="font-medium text-[22px] text-grey1000">
                Documents
              </h4>
            </div>
            {/* <FileStatusTable /> */}
          </div>

          <div className="px-10 pt-6 w-full grid grid-cols-2 gap-10">
            <FileInputFade2
              id=""
              placeholder="Upload Documents"
              value
              label="Add Documents"
            />

            <div className="w-[210px]">
              <DropDownFade
                type="text"
                placeholder="Select"
                label="Document Type"
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

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-4">
              <h4 className="font-medium text-[22px] text-grey1000">Notes</h4>
            </div>
            <div className="w-full">
              <button className="w-fit h-9  bg-success rounded flex hover:bg-successHover transition duration-200">
                <div className="w-[126px] h-full px-7 flex items-center justify-center">
                  <p className="text-xs font-semibold text-grey1000">
                    Low Priority
                  </p>
                </div>
                <div className="px-[6px] py-3 border-l border-successHover flex items-center h-full justify-center">
                  <ArrowDown2
                    variant="Bold"
                    size={12}
                    className="text-grey1000"
                  />
                </div>
              </button>

              {/* EDITOR */}
              <div className="w-full mt-4">
                <QuillEditor
                  value={content}
                  onChange={handleEditorChange}
                  modules={quillModules}
                  formats={quillFormats}
                  className="w-full h-[70%] mt-10 text-black bg-bg2 !rounded"
                />
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

      <Modal isOpen={openAction} setIsOpen={setOpenAction}>
        <div className="w-[840px] min-w-[840px] min-h-[400px] max-h-[90vh] slim-scroll bg-white relative">
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
              setValue={() => {}}
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
          <div className="px-10 pt-6 w-full grid grid-cols-2 gap-10">
            <FileInputFade2
              id=""
              placeholder="Upload Documents"
              value
              label="Add Documents"
            />

            <div className="w-[210px]">
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

      <Modal isOpen={openReceipt} setIsOpen={setOpenReceipt}>
        <div className="w-[840px] min-w-[840px] min-h-[400px] max-h-[90vh] slim-scroll bg-white relative">
          {/* Header Bar */}

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-[60px] flex items-center justify-between">
              <h4 className="font-medium text-[22px] text-grey1000">
                Proof of Receipt
              </h4>
              <p className="font-medium text-lg text-grey1000">Today's Date</p>
            </div>
          </div>

          <div className="px-10 w-full grid grid-cols-2 gap-[26px] text:grey900">
            <InputFade
              type="text"
              label="Driver Name"
              placeholder="Enter"
              setValue={() => {}}
              lClass="text-grey1000"
            />
            <InputFade
              type="text"
              label="ID / Iqama Number"
              placeholder="Enter"
              lClass="text-grey1000"
              setValue={() => {}}
            />

            <PlateInputFade
              type="text"
              label="Plate Number"
              lClass="text-grey1000"
              placeholder="Enter Number"
            />

            <div className="w-full flex flex-col input-wrap !p-0">
              <label className="labels">Mobile Number</label>
              <PhoneInput
                country={"sa"}
                placeholder="Enter phone number"
                value=""
                // onChange={}
                searchStyle={{
                  width: "100%",
                  display: "flex",
                  gap: "14px",
                }}
                inputStyle={{
                  width: "100%",
                  height: 40,
                  padding: "10px 70px",
                  border: "1px #888888 solid",
                  background: "none",
                  fontSize: "15px",
                  color: "#333",
                }}
                buttonStyle={{
                  border: "1px #888888 solid",
                  background: "none",
                  padding: "10px ",
                  width: 60,
                }}
              />
            </div>

            <InputFade
              type="text"
              label="Container Number"
              placeholder="Enter"
              setValue={() => {}}
              lClass="text-grey1000"
            />

            <InputFade
              type="text"
              label="Custom Seal Number"
              placeholder="Enter"
              lClass="text-grey1000"
              setValue={() => {}}
            />

            <div className="w-full flex items-center justify-between gap-5">
              <DateInputFade
                id=""
                label="Entry Date"
                placeholder=""
                value={""}
              />

              <TimeInputFade
                id=""
                label="Entry Time"
                placeholder=""
                value={""}
              />
            </div>

            <div className="w-full flex items-center justify-between gap-5">
              <DateInputFade
                id=""
                label="Exit Date"
                placeholder=""
                value={""}
              />

              <TimeInputFade
                id=""
                label="Exit Time"
                placeholder=""
                value={""}
              />
            </div>
          </div>
          <div className="px-10 mt-[26px] w-full grid grid-cols-2 items-end gap-[26px] text:grey900 ">
            <DropDownFade
              label="Number of Pallet"
              placeholder=""
              data={documentType}
              value={palletNo}
              setValue={setPalletNo}
              type=""
            />

            <RadioCheck
              checked={chooseCheck}
              setChecked={setChooseCheck}
              text="Choose All"
            />
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

      <Modal isOpen={openDeliveryProof} setIsOpen={setOpenDeliveryProof}>
        <div className="w-[840px] min-w-[840px] min-h-[400px] max-h-[90vh] slim-scroll bg-white relative">
          {/* Header Bar */}

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-[60px] flex items-center justify-between">
              <h4 className="font-medium text-[22px] text-grey1000">
                Proof of Delivery
              </h4>
              <p className="font-medium text-lg text-grey1000">Today's Date</p>
            </div>
          </div>

          <div className="px-10 w-full grid grid-cols-2 gap-[26px] text:grey900">
            <InputFade
              type="text"
              label="Driver Name"
              placeholder="Enter"
              setValue={() => {}}
              lClass="text-grey1000"
            />
            <InputFade
              type="text"
              label="ID / Iqama Number"
              placeholder="Enter"
              lClass="text-grey1000"
              setValue={() => {}}
            />

            <PlateInputFade
              type="text"
              label="Plate Number"
              lClass="text-grey1000"
              placeholder="Enter Number"
            />

            <div className="w-full flex flex-col input-wrap !p-0">
              <label className="labels">Mobile Number</label>
              <PhoneInput
                country={"sa"}
                placeholder="Enter phone number"
                value=""
                // onChange={}
                searchStyle={{
                  width: "100%",
                  display: "flex",
                  gap: "14px",
                }}
                inputStyle={{
                  width: "100%",
                  height: 40,
                  padding: "10px 70px",
                  border: "1px #888888 solid",
                  background: "none",
                  fontSize: "15px",
                  color: "#333",
                }}
                buttonStyle={{
                  border: "1px #888888 solid",
                  background: "none",
                  padding: "10px ",
                  width: 60,
                }}
              />
            </div>

            <InputFade
              type="text"
              label="Container Number"
              placeholder="Enter"
              setValue={() => {}}
              lClass="text-grey1000"
            />

            <InputFade
              type="text"
              label="Custom Seal Number"
              placeholder="Enter"
              lClass="text-grey1000"
              setValue={() => {}}
            />

            <div className="w-full flex items-center justify-between gap-5">
              <DateInputFade
                id=""
                label="Entry Date"
                placeholder=""
                value={""}
              />

              <TimeInputFade
                id=""
                label="Entry Time"
                placeholder=""
                value={""}
              />
            </div>

            <div className="w-full flex items-center justify-between gap-5">
              <DateInputFade
                id=""
                label="Exit Date"
                placeholder=""
                value={""}
              />

              <TimeInputFade
                id=""
                label="Exit Time"
                placeholder=""
                value={""}
              />
            </div>
          </div>
          <div className="px-10 mt-[26px] w-full grid grid-cols-3 items-end gap-[26px] text:grey900 ">
            <div className="relative">
              <DropDownFade
                label="Number of Pallet"
                placeholder=""
                data={documentType}
                value={palletNo}
                setValue={setPalletNo}
                type=""
              />
              <div className="absolute top-1 right-0 flex">
                <RadioCheck
                  checked={chooseCheck}
                  setChecked={setChooseCheck}
                  text="Choose All"
                  rClass="!m-0 !p-0"
                  pClass="text-sm"
                  size="16px"
                />
              </div>
            </div>

            <InputFade
              type="text"
              label="Number of Packages"
              placeholder="Enter"
              setValue={() => {}}
              lClass="text-grey1000"
            />

            <InputFade
              type="text"
              label="Container Number"
              placeholder="Enter"
              setValue={() => {}}
              lClass="text-grey1000"
            />
          </div>

          <div className="px-10 pt-4 bg-white flex flex-col gap-[26px]">
            <FilledButton
              text="Add Pallet"
              image={require("@/assets/icons/add-sec700.svg")}
              btnClass="rounded border border-sec700 !w-fit px-4 !h-fit"
              pClass="font-normal text-sec700 text-lg"
              cta={() => {}}
            />
            <PalletTable/>
            <TextArea
              type="text"
              //   value={customer}
              setValue={() => {}}
              label="Remarks"
              placeholder="Enter Remark"
              iClass="h-[84px] text-base"
            />
          </div>
          
          <div className="px-10 pt-6 bg-white flex flex-col gap-[26px]">
          </div>

          <div className="px-10 my-10 bg-white flex items-center justify-end gap-6">
            <FilledButton
              text="Save"
              btnClass="bg-primary rounded !w-fit px-7 !h-fit"
              pClass="font-normal text-white text-lg"
              cta={() => {}}
            />
          </div>
        </div>
      </Modal>

      {tab === "details" && <ContainerDetails />}
      {tab === "sales-invoices" && <SalesInvoice />}
      {tab === "purchase-invoices" && <PurchaseInvoice />}
      {tab === "quotation" && <Quotation />}
      {tab === "notes/documents" && <NotesAndDocuments />}
      {tab === "track-action" && <TrackAction />}
      {tab === "active-record" && <ActiveRecords />}
      {tab === "financial-movements" && <FinancialMovements />}
      {tab === "operations-summary" && <OperationSummary />}
      {tab === "proof-of-receipt" && <ReceiptProof />}
      {tab === "proof-of-delivery" && <DeliveryProof />}
    </div>
  );
};

export default Page;
