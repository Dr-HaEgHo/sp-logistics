"use client";
import { GlobalContext } from "@/context/context";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FilledButton } from "../Button";
import Image from "next/image";
import { DropDownFade, FileInputFade, InputFade, PrefixInput } from "../Input";
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
  ArrowRight3,
  SearchNormal1,
} from "iconsax-react";
import Table from "../Table";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "../Modal";
import DeliveryTable from "../DeliveryTable";
import DeliveryFilled from "../DeliveryFilled";
import { DeliveryProps } from "@/types";
import { codes, movementTypes, ports, tabs2 as tabs } from "@/data";
import { RadioCheck } from "../CheckBox";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { LoadButton } from "../Load";
import { clearCreateSuccess } from "@/store/clearance/clearanceSlice";
import { createNewClearance } from "@/store/clearance/clearanceAction";

const CreateNew = () => {
  const router = useRouter();
  const search = useSearchParams();
  const formRef = useRef();
  const qTab = new URLSearchParams(search).get("tab");
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector(state => state.clearance.loading);
  const createSuccess = useAppSelector(state => state.clearance.createSuccess)

  const { headerInfo, setHeaderInfo } = useContext(GlobalContext);
  const [customer, setCustomer] = useState<string>("");
  const [billOfLading, setBillOfLading] = useState<string>("");
  const [customerRefNumber, setCustomerRefNumber] = useState<string>("");
  const [businessUnit, setBusinessUnit] = useState<string>("");
  const [port, setPort] = useState<string>("");
  const [pickUp, setPickUp] = useState<0 | 1>(0);
  const [movementType, setMovementType] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [deliOpen, setDeliOpen] = useState<boolean>(false);
  const [deli, setDeli] = useState<DeliveryProps | null>(null);
  const [disabled, setDisabled ] = useState<boolean>(true);
  const [ loading, setLoading ] = useState<boolean>(false)


  // reassigns values to object and dispatches call to the backend
  const submit = () => {
    // if(deli === null){
    //   return;
    // }
    let values = {
      customer, 
      billOfLading, 
      customerRefNumber, 
      businessUnit, 
      port, 
      movementType, 
      pickUp,
      deli
    }

    dispatch(createNewClearance(values))
  }


  // THIS CHECKS THE MOVEMENT TYPE WHICH DETERMINES WHERE THE PAGE ROUTES TO
  const checkMovementType = () => {
    switch (movementType) {
      case 'Air': 
        return 'air-movement'
      case 'Ocean' :
        return 'ocean-movemnent';
      case 'Land' : 
        return 'land-movement'
      default:
          return ""
    }
  }

  // set the header info in context on component mount
  useEffect(() => {
    setHeaderInfo("Create New");
  }, []);


  // set the value for the pickup to be sent to BE 
  useEffect(() => {
    if(checked){
      setPickUp(1);
    } else{
      setPickUp(0)
    }
    console.log("bill something: ", pickUp);
  }, [checked]);

  // HANDLES THE DISABLE BUTTON
  useEffect(() => {
    if(
      customer === "" || 
      billOfLading === "" || 
      customerRefNumber === "" || 
      businessUnit === "" || 
      port === "" || 
      movementType === "" || 
      deli === null
    ) {
      setDisabled(true)
    }else{
      setDisabled(false)
    }

    console.log('all ', {
      customer, 
      billOfLading, 
      customerRefNumber, 
      businessUnit, 
      port, 
      movementType, 
      deli
    })
    console.log('disabled', disabled)

  }, [customer, billOfLading, customerRefNumber, businessUnit, port, pickUp, movementType, deli, ])


  // HANDLES THE LOADING 
  useEffect(() => {
    if(isLoading) {
      setLoading(true)
    }else{
      setLoading(false)
    }
  }, [isLoading]);

  // THIS CLEARS THE FORM AND ROUTE TO THE PROPER  ROUTE ON SUCCESS DEPENDING ON WHAT MOVEMENT TYPE IS CHOSEN
  useEffect(() => {
    if(createSuccess === true)  {
      setCustomer('') 
      setBillOfLading('') 
      setCustomerRefNumber('') 
      setBusinessUnit('') 
      setPort('') 
      setMovementType('') 
      setDeli(null)
      setPickUp(0)
      router.push(`/dashboard/clearance?dir=${checkMovementType()}`)
    }
    setTimeout(() => {
      dispatch(clearCreateSuccess());
    }, 800);
  }, [createSuccess]);

  return (
    <div className="w-full">
      <Modal isOpen={deliOpen} setIsOpen={setDeliOpen}>
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

          <DeliveryTable setValue={setDeli} setOpen={setDeliOpen} />
        </div>
      </Modal>
      {/* top section wwith the header Info */}
      <div className="w-full flex flex-col justify-between mb-12">
        <h2 className="font-medium text-[22px] text-black">{headerInfo}</h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-[50px]">
          <div className="flex items-center justify-start gap-5 mb-7">
            <InputFade
              type="number"
              placeholder="12345667889"
              label="File Reference"
              iClass=""
              iwClass="!w-[224px]"
              isDisabled={true}
            />
            <InputFade
              type="number"
              placeholder="26/08/2024"
              label="Date"
              iClass="max-w-[224px]"
              iwClass="!w-[162px]"
              isDisabled={true}
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            {/* <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Customer"
              placeholder="Select Customer"
              data={codes}
            /> */}

            <InputFade
              label="Customer"
              type="text"
              placeholder="Enter"
              value={customer}
              handleChange={(e) => setCustomer(e.target.value)}
            />

            <PrefixInput
              label="Bill of Lading Number"
              type="string"
              type2="string"
              placeholder="Prefix"
              placeholder2="Enter Number"
              value={billOfLading}
              setValue={setBillOfLading}
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="text"
              placeholder="Enter Number"
              label="Customer Reference Number"
              value={customerRefNumber}
              handleChange={(e) => setCustomerRefNumber(e.target.value)}
            />
            <DropDownFade
              type="text"
              value={businessUnit}
              setValue={setBusinessUnit}
              label="Business Unit"
              placeholder="Select"
              data={codes}
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={port}
              setValue={setPort}
              label="Port"
              placeholder="Select Port"
              data={ports}
            />
            <DropDownFade
              type="text"
              value={movementType}
              setValue={setMovementType}
              label="Movement Type"
              placeholder="Select type"
              data={movementTypes}
            />
          </div>

          <div className="w-full flex items-start gap-[26px]">
            {deli !== null ? (
              <DeliveryFilled
                label="Delivery to"
                data={deli}
                setData={setDeli}
              />
            ) : (
              <FileInputFade
                id="select customer"
                placeholder="Select from CustomerFile"
                label="Delivery to"
                value=""
                handleChange={() => {}}
                cta={() => {
                  setDeliOpen(!deliOpen);
                }}
              />
            )}

            {/* `RADIO STYLED CKECK BUTTON` */}
            <RadioCheck rClass="!w-full" checked={checked} setChecked={setChecked} text="Pick up by Customer"/>
           
          </div>
        </form>
        <div className="w-full flex justify-end gap-4">
          <FilledButton
            text="Back"
            btnClass=" !w-fit px-[30px]"
            pClass="text-dark800 text-lg font-medium"
          />
          <FilledButton
            text=""
            btnClass="bg-primary !flex-row-reverse !w-fit px-[30px] hover:bg-hoverRed active:bg-primary disabled:bg-disableRed"
            pClass="text-white text-lg font-medium"
            disabled={disabled}
            cta={submit}
          >
            {loading === true ? <LoadButton /> : <p className="text-white">Next</p>}
          </FilledButton>
        </div>
      </div>
    </div>
  );
};

export default CreateNew;
