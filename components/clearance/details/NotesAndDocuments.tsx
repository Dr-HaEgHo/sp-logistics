import { FilledButton } from "@/components/Button";
import { DropDownFade, InputFade } from "@/components/Input";
import Table from "@/components/Table";
import { ArrowDown2, ArrowLeft2, ArrowRight2, Refresh } from "iconsax-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import SalesTable from "./SalesTable";
import Document from "@/components/clearance/Document";
import Note from "@/components/clearance/Note";

const clients = [
  { id: 1, name: "Any Client" },
  { id: 2, name: "Local Client" },
  { id: 3, name: "Foreign Client" },
];

const types = [
  { id: 1, name: "All Types" },
  { id: 2, name: "Good Types" },
  { id: 3, name: "Fair Types" },
  { id: 4, name: "Bad Types" },
];

const tabs = [
  { id: 1, title: "Everyone ", count: "3340" },
  { id: 1, title: "Late", count: "3330" },
  { id: 1, title: "Due", count: "500" },
  { id: 1, title: "Unpaid", count: "500" },
  { id: 1, title: "Draft", count: "500" },
  { id: 1, title: "Paid for Extra", count: "500" },
];

const documents = [
  {
    id: 1,
    filename: "screenshot..0000lorem ispum at  19/08/2024.png",
    size: "18.762 KB",
    label: "Invoice",
    image: require("@/assets/images/image.png"),
  },
  {
    id: 2,
    filename: "screenshot..0000lorem ispum at  19/08/2024.png",
    size: "18.762 KB",
    label: "Invoice",
    image: require("@/assets/images/image.png"),
  },
  {
    id: 3,
    filename: "screenshot..0000lorem ispum at  19/08/2024.png",
    size: "18.762 KB",
    label: "Invoice",
    image: require("@/assets/images/image.png"),
  },
  {
    id: 4,
    filename: "screenshot..0000lorem ispum at  19/08/2024.png",
    size: "18.762 KB",
    label: "Invoice",
    image: require("@/assets/images/image.png"),
  },
];

const notes = [
  {
    id: 1,
    title: "",
    desc: "Due to port congestion, the delivery of Shipment #8910 is delayed by 2 days.",
    date: "09/09/2024",
    time: "17:35:01",
    priority: "High",
  },
  {
    id: 2,
    title: "New Contract with Carrier <Name>",
    desc: "Signed a new contract with Carrier <Name> for regular freight shipments from Port A to Port B",
    date: "09/09/2024",
    time: "17:35:01",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Meeting Notes – Carrier Partnership Discussion",
    desc: "Discussed potential partnership with new freight carrier for international shipments",
    date: "09/09/2024",
    time: "17:35:01",
    priority: "High",
  },
  {
    id: 4,
    title: "Customs Clearance Update – Shipment #4567",
    desc: "Due to port congestion, the delivery of Shipment #8910 is delayed by 2 days.",
    date: "09/09/2024",
    time: "17:35:01",
    priority: "Low",
  },
  {
    id: 5,
    title: "New Contract with Carrier <Name>",
    desc: "Signed a new contract with Carrier <Name> for regular freight shipments from Port A to Port B",
    date: "09/09/2024",
    time: "17:35:01",
    priority: "Low",
  },
  {
    id: 6,
    title: "Meeting Notes – Carrier Partnership Discussion",
    desc: "Discussed potential partnership with new freight carrier for international shipments",
    date: "09/09/2024",
    time: "17:35:01",
    priority: "Medium",
  },
];

const NotesAndDocuments = () => {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="w-full bg-white p-10 relative mb-14">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0" />

        {/* TITLE AND DROP DOWN */}
        <div className="w-full flex items-start justify-between mb-10">
          <div className="flex items-center gap-4">
            <p className="text-sm text-grey1000 font-medium ">Documents</p>
            <p className="text-base font-semibold text-sec700">September</p>
          </div>
          <div className="w-[148px] ">
            <DropDownFade
              setValue={() => {}}
              type="text"
              placeholder="All Types"
              data={types}
              iwClass="!gap-0"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          {documents &&
            documents.map((doc) => (
              <Document
                fileName={doc.filename}
                size={doc.size}
                label={doc.label}
                image={doc.image}
              />
            ))}
        </div>
      </div>

      <div className="w-full bg-white p-10 relative">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0" />

        {/* TITLE AND DROP DOWN */}
        <div className="w-full flex items-start justify-between mb-10">
          <div className="flex items-center gap-4">
            <p className="text-sm text-grey1000 font-medium ">Notes</p>
            <p className="text-base font-semibold text-sec700">September</p>
          </div>
          <div className="w-[148px] ">
            <DropDownFade
              setValue={() => {}}
              type="text"
              placeholder="All Types"
              data={types}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-4">
          {notes &&
            notes.map((note) => (
              <Note 
                priority={note.priority}
                title={note.title}
                desc={note.desc} 
                date={note.date}
                time={note.time}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NotesAndDocuments;
