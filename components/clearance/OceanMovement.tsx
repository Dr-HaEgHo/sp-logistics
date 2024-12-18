"use client";
import { GlobalContext } from "@/context/context";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { FilledButton } from "../Button";
import Image from "next/image";
import {
  DateInputFade,
  DropDownFade,
  FileInputFade,
  InputFade,
  PrefixInput,
  TextArea,
} from "../Input";
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
  ArrowRight3,
  CloseCircle,
  SearchNormal1,
} from "iconsax-react";
import Table from "../Table";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "../Modal";
import DeliveryTable from "../DeliveryTable";
import DeliveryFilled from "../DeliveryFilled";
import { DeliveryProps } from "@/types";
import FileStatusTable from "../FileStatusTable";
import { containerTypes } from "@/data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addOceanMovement } from "@/store/clearance/clearanceAction";
import { clearOceanMovementSuccess } from "@/store/clearance/clearanceSlice";
import { LoadButton } from "../Load";

const codes = [
  { id: 1, name: "Business" },
  { id: 2, name: "Marketing Agency" },
  { id: 3, name: "Solopreneur / Freelancer" },
  { id: 4, name: "Other" },
];

const tabs = [
  { id: 1, title: "All", count: "3340" },
  { id: 1, title: "Opened", count: "3330" },
  { id: 1, title: "Closed", count: "500" },
];

const OceanMovement = () => {
  const router = useRouter();
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.clearance.loading);
  const success = useAppSelector((state) => state.clearance.oceanMovementSuccess);

  const { headerInfo, setHeaderInfo } = useContext(GlobalContext);
  const [customer, setCustomer] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [addContainerOpen, setAddContainerOpen] = useState<boolean>(false);
  const [consigneeOpen, setConsigneeOpen] = useState<boolean>(false);
  const [shipperOpen, setShipperOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  // FORM VARIABLES
  const [consignee, setConsignee] = useState<DeliveryProps | null>(null);
  const [shipper, setShipper] = useState<DeliveryProps | null>(null);
  const [noOfParcels, setNoOfParcels] = useState<number | undefined>(undefined);
  const [grossWeight, setGrossWeight] = useState<number | undefined>(undefined);
  const [ContainerType, setContainerType] = useState<string>("");
  const [noOfContainers, setNoOfContainers] = useState<number | undefined>(
    undefined
  );
  const [description, setDescription] = useState<string>("");
  const [portOfLoading, setPortOfLoading] = useState<string>("");
  const [arrivalPort, setArrivalPort] = useState<string>("");
  const [arrivalCarrier, setArrivalCarrier] = useState<string>("");
  const [arrivalVesselName, setArrivalVesselName] = useState<string>("");
  const [arrivalVoyageNumber, setArrivalVoyageNumber] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [fasahNumber, setFasahNumber] = useState<string>("");
  const [bayanNumber, setBayanNumber] = useState<string>("");
  const [bayanDate, setBayanDate] = useState<string>("");

  // THE SUBMIT HANDLER
  const submit = () => {
    if (consignee === null || shipper === null) {
      return;
    }
    let values = {
      consignee,
      shipper,
      noOfParcels,
      grossWeight,
      ContainerType,
      noOfContainers,
      description,
      portOfLoading,
      arrivalPort,
      arrivalCarrier,
      arrivalVesselName,
      arrivalVoyageNumber,
      arrivalDate,
      fasahNumber,
      bayanNumber,
      bayanDate,
    };

    dispatch(addOceanMovement(values));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit();
  };

  // HANDLES THE BUTTON DISABLE FEATURE
  useEffect(() => {
    if (
      consignee === null ||
      shipper === null ||
      noOfParcels === undefined ||
      grossWeight === undefined ||
      ContainerType === "" ||
      noOfContainers === undefined ||
      description === "" ||
      portOfLoading === "" ||
      arrivalPort === "" ||
      arrivalCarrier === "" ||
      arrivalVesselName === "" ||
      arrivalVoyageNumber === "" ||
      arrivalDate === "" ||
      fasahNumber === "" ||
      bayanNumber === "" ||
      bayanDate === ""
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    console.log("all ", {
      consignee,
      shipper,
      noOfParcels,
      grossWeight,
      ContainerType,
      noOfContainers,
      description,
      portOfLoading,
      arrivalPort,
      arrivalCarrier,
      arrivalVesselName,
      arrivalVoyageNumber,
      arrivalDate,
      fasahNumber,
      bayanNumber,
      bayanDate,
    });
    console.log("disabled", disabled);
  }, [
    consignee,
    shipper,
    noOfParcels,
    grossWeight,
    ContainerType,
    noOfContainers,
    description,
    portOfLoading,
    arrivalPort,
    arrivalCarrier,
    arrivalVesselName,
    arrivalVoyageNumber,
    arrivalDate,
    fasahNumber,
    bayanNumber,
    bayanDate,
  ]);

  // HANDLES THE LOADING
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isLoading]);

  // THIS CLEARS THE FORM AND ROUTE TO THE PROPER  ROUTE ON SUCCESS DEPENDING ON WHAT MOVEMENT TYPE IS CHOSEN
  useEffect(() => {
    if (success === true) {
      setConsignee(null);
      setShipper(null);
      setNoOfParcels(undefined);
      setGrossWeight(undefined);
      setContainerType("");
      setNoOfContainers(undefined);
      setDescription("");
      setPortOfLoading("");
      setArrivalPort("");
      setArrivalCarrier("");
      setArrivalVesselName("");
      setArrivalVoyageNumber("");
      setArrivalDate("");
      setFasahNumber("");
      setBayanNumber("");
      setBayanDate("");
      router.push(`/dashboard/clearance/details`);
    }
    setTimeout(() => {
      dispatch(clearOceanMovementSuccess());
    }, 800);
  }, [success]);

  useEffect(() => {
    console.log("this is the dscription: ", );
  }, []);

  // set the header info in context on component mount
  useEffect(() => {
    setHeaderInfo("Ocean Movement Type");
  }, []);

  return (
    <div className="w-full">
      <Modal isOpen={consigneeOpen} setIsOpen={setConsigneeOpen}>
        <div className="min-w-[844px] max-h-[504px] slim-scroll relative">
          {/* HEader Bar */}
          <div className="w-full sticky top-0">
            <div className="px-10 py-4 bg-white ">
              <p className="text-base text-grey1000 font-medium">
                Select Delivery Location
              </p>
            </div>

            {/* Search */}
            <div className="px-10 py-3 bg-white border flex items-center gap-4 border-sec700">
              <SearchNormal1 className="text-grey700" size={24} />
              <input
                type="text"
                className="text-[13px] placeholder:text-grey500"
                placeholder="Search"
              />
            </div>
          </div>

          <DeliveryTable setValue={setConsignee} setOpen={setConsigneeOpen} />
        </div>
      </Modal>

      <Modal isOpen={shipperOpen} setIsOpen={setShipperOpen}>
        <div className="min-w-[844px] max-h-[504px] slim-scroll relative">
          {/* HEader Bar */}
          <div className="w-full sticky top-0">
            <div className="px-10 py-4 bg-white ">
              <p className="text-base text-grey1000 font-medium">
                Select Delivery Location
              </p>
            </div>

            {/* Search */}
            <div className="px-10 py-3 bg-white border flex items-center gap-4 border-sec700">
              <SearchNormal1 className="text-grey700" size={24} />
              <input
                type="text"
                className="text-[13px] placeholder:text-grey500"
                placeholder="Search"
              />
            </div>
          </div>

          <DeliveryTable setValue={setShipper} setOpen={setShipperOpen} />
        </div>
      </Modal>

      <Modal isOpen={addContainerOpen} setIsOpen={setAddContainerOpen}>
        <div className="w-[1320px] min-w-[844px] min-h-[400px] slim-scroll bg-white relative">
          {/* HEader Bar */}

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-4">
              <h4 className="font-medium text-[22px] text-grey1000">
                Container Information
              </h4>
            </div>
            {/* <FileStatusTable /> */}
          </div>

          <div className="px-10 pt-4 bg-white flex gap-[26px]">
            <PrefixInput
              label="Container Number"
              type="string"
              type2="number"
              placeholder="Letters"
              placeholder2="Enter Number"
              lClass="text-base text-grey1000 font-normal"
            />

            <DropDownFade
              type="text"
              placeholder="Enter Number"
              label="Container Size"
              data={codes}
              setValue={() => {}}
            />

            <InputFade
              type="number"
              label="Weight"
              placeholder="Enter number"
              lClass="text-base text-grey1000 font-normal"
            />
            <InputFade
              type="number"
              label="Number of Parcels"
              lClass="text-base text-grey1000 font-normal"
              placeholder="Enter number"
            />
          </div>

          <div className="px-10 mt-10 bg-white flex items-center justify-start">
            <FilledButton
              text="Add Container"
              image={require("../../assets/icons/add-sec700.svg")}
              btnClass="border border-sec700 rounded !w-fit px-4 !h-fit"
              pClass="font-medium text-sec700 text-lg"
              cta={() => {
                setAddContainerOpen(false);
              }}
            />
          </div>

          <div className="px-10 mt-[60px] bg-white flex items-center justify-end">
            <FilledButton
              text="Save"
              btnClass="bg-primary rounded !w-fit px-7 !h-fit"
              pClass="font-medium text-white text-lg"
              cta={() => {}}
            />
          </div>
        </div>
      </Modal>

      {/* top section wwith the header Info */}
      <div className="w-full flex flex-col justify-between mb-12">
        <h2 className="font-medium text-[22px] text-black">{headerInfo}</h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form onSubmit={submit} className="flex flex-col gap-5 mb-[50px]">
          <div className="w-full flex items-start gap-[26px]">
            {consignee !== null ? (
              <DeliveryFilled
                label="Consignee"
                data={consignee}
                setData={setConsignee}
              />
            ) : (
              <FileInputFade
                id="select customer"
                placeholder="Select from Customer File"
                label="Consignee"
                value=""
                cta={() => {
                  setConsigneeOpen(!consigneeOpen);
                }}
              />
            )}

            {shipper !== null ? (
              <DeliveryFilled
                label="Shipper"
                data={shipper}
                setData={setShipper}
              />
            ) : (
              <FileInputFade
                id="select customer"
                placeholder="Select from Customer File"
                label="Shipper"
                value=""
                cta={() => {
                  setShipperOpen(!shipperOpen);
                }}
              />
            )}
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="number"
              label="Gross Weight"
              placeholder="Select your company type"
              value={grossWeight}
              handleChange={(e) => setGrossWeight(parseInt(e.target.value))}
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Number of Parcels"
              value={noOfParcels}
              handleChange={(e) => setNoOfParcels(parseInt(e.target.value))}
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              placeholder="Enter Number"
              label="Container Type"
              data={containerTypes}
              value={ContainerType}
              setValue={setContainerType}
            />
            <div className="w-full flex items-end gap-20">
              <InputFade
                type="number"
                placeholder="Enter Number"
                label="Number of Containers"
                value={noOfContainers}
                handleChange={(e) =>
                  setNoOfContainers(parseInt(e.target.value))
                }
              />
              <FilledButton
                text="Add Container"
                image={require("../../assets/icons/add-sec700.svg")}
                btnClass="border border-sec700 rounded !h-fit"
                pClass="font-medium text-sec700 text-lg"
                cta={() => {
                  setAddContainerOpen(true);
                }}
              />
            </div>
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <TextArea
              type="text"
              value={description}
              setValue={setDescription}
              label="Description of the goods"
              placeholder="Enter Description"
              iClass="h-[84px] text-base"
            />
          </div>

          <div className="w-full flex items-start gap-[26px]">
            <InputFade
              type="text"
              placeholder="Enter PRIFEX Code"
              label="Port of Loading"
              value={portOfLoading}
              handleChange={(e) => setPortOfLoading(e.target.value)}
            />
            <InputFade
              type="text"
              placeholder="Enter PRIFEX Code"
              label="Arrival Port"
              value={arrivalPort}
              handleChange={(e) => setArrivalPort(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="w-full flex flex-col justify-between mb-12">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0 mt-2" />
        <h2 className="font-medium text-[22px] text-black">
          Arrival Information
        </h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-[50px]">
          <div className="w-full flex items-start gap-[26px]">
            <InputFade
              type="text"
              placeholder="Enter Airline Code"
              label="Carrier"
              value={arrivalCarrier}
              handleChange={(e) => setArrivalCarrier(e.target.value)}
            />
            <InputFade
              type="text"
              placeholder="Enter Vessel Name"
              label="Vessel Name"
              value={arrivalVesselName}
              handleChange={(e) => setArrivalVesselName(e.target.value)}
            />
            <InputFade
              type="text"
              placeholder="Enter Voyage Number"
              label="Voyage Number"
              value={arrivalVoyageNumber}
              handleChange={(e) => setArrivalVoyageNumber(e.target.value)}
            />
            <DateInputFade
              id="select customer"
              placeholder="Select from CustomerFile"
              label="Arrival Date"
              value={arrivalDate}
              handleChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="w-full flex flex-col justify-between mb-12">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0 mt-2" />
        <h2 className="font-medium text-[22px] text-black">
          FASAH Information
        </h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-[50px]">
          <div className="w-full flex items-start gap-[26px]">
            <InputFade
              type="text"
              placeholder="Enter number"
              label="DRAFT Number"
              value={fasahNumber}
              handleChange={(e) => setFasahNumber(e.target.value)}
            />
            <InputFade
              type="text"
              placeholder="Enter number"
              label="BAYAN Number"
              value={bayanNumber}
              handleChange={(e) => setBayanNumber(e.target.value)}
            />
            <DateInputFade
              id="select customer"
              placeholder="Select from CustomerFile"
              label="BAYAN Date"
              value={bayanDate}
              handleChange={(e) => setBayanDate(e.target.value)}
            />
          </div>
        </form>

        <div className="w-full flex justify-end gap-4">
          <FilledButton
            text="Back"
            btnClass=" !w-fit px-[30px]"
            pClass="text-dark800 text-lg font-medium"
          />
          <FilledButton
            text="Next"
            btnClass="bg-primary !flex-row-reverse !w-fit px-[30px] disabled:bg-disableRed hover:bg-hoverRed active:bg-primary"
            pClass="text-white text-lg font-medium"
            disabled={disabled}
            cta={() => submit()}
          >
            {loading === true ? (
              <LoadButton />
            ) : (
              <p className="text-white">Next</p>
            )}
          </FilledButton>
        </div>
      </div>
    </div>
  );
};

export default OceanMovement;
