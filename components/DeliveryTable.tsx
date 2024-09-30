"use client";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import TableShimmerLoader from "./TableShimmerLoader";
import EmptyTable from "./EmptyTable";
// import { TableProps } from '@/types';
import Image from "next/image";
import { More } from "iconsax-react";
import { FilledButton } from "./Button";
// import moment from 'moment';

interface TableProps {
  data?: {
    results: any[];
  };
  loading?: boolean;
  setValue?: Function;
  setOpen: Function;
}

const status = [
  { id: 1, acctNo: "1234", name: "warehouse 1", city: "New York", address: "1234 Broadway Ave, NY 10001" },
  { id: 2, acctNo: "1234", name: "warehouse 2", city: "Los Angeles", address: "5678 Sunset Blvd, CA 90028" },
  { id: 3, acctNo: "1234", name: "warehouse 3", city: "Chicago", address: "910 Michigan Ave, IL 60611" },
  { id: 4, acctNo: "1234", name: "warehouse 4", city: "Houston", address: "1122 Main St, TX 77002" },
  { id: 5, acctNo: "1234", name: "warehouse 5", city: "Miami", address: "45 Ocean Dr, FL 33139" },
  { id: 6, acctNo: "1234", name: "warehouse 6", city: "San Francisco", address: "789 Market St, CA 94103" },
  { id: 7, acctNo: "1234", name: "warehouse 7", city: "Dallas", address: "654 Maple Ave, Dallas, TX 75201" },
];

const DeliveryTable: FC<TableProps> = ({ data, loading, setValue, setOpen }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [sortedResults, setSortedResults] = useState([] as any);
  const [domLoaded, setDomLoaded] = useState(false);
  const router = useRouter();

  const sortResults = () => {
    // if (data.results) {
    //     console.log("results in table:::", data.results)
    //     const dataCopy: any[] = [...data.results]
    //     const newSortedResults = dataCopy.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    //     setSortedResults(newSortedResults)
    // }
  };

  useEffect(() => {
    sortResults();
  }, []);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <div className="w-full bg-white rounded-lg">
          <table className="w-full">
            <thead className="w-full p-[18px] ">
              <tr className="w-full flex items-center justify-between bg-tableHeaderGreen">
                <th className="table-header-green !bg-tableHeaderGreen !border-l-0">
                  <h4 className="text-sm text-black"> 
                    Warehouse
                  </h4>
                </th>
                <th className="table-header-green !bg-tableHeaderGreen">
                  <h4 className="text-smy">
                    City
                  </h4>
                </th>
                <th className="table-header-green !bg-tableHeaderGreen">
                  <h4 className="text-sm">
                   Address
                  </h4>
                </th>
                <th className="table-header-green !bg-tableHeaderGreen !border-r-0">
                  
                </th>
              
              </tr>
            </thead>

            <tbody
              className={`flex flex-col ${
                loading && "animate-pulse w-full flex flex-col mt-4 px-4 mb-4"
              }`}
            >
              {loading ? (
                <TableShimmerLoader />
              ) : (
                <>
                  {status &&
                    status.map((item) => (
                      <tr className="w-full flex items-center justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                        <td className="table-body-green !border-l-0 !justify-start">
                          <p className="w-full flex items-center justify-center gap-2">
                            Warehouse 1
                          </p>
                        </td>
                        <td className="table-body-green">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              { item.city}
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              { item.address }
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green !border-r-0">
                          <FilledButton
                            text="SELECT"
                            pClass="text-sec800"
                            cta={() => {
                                if(setValue){
                                    setValue({
                                        acctNo: item.acctNo,
                                        name: item.name,
                                        address: item.address,
                                        contact: ""
                                    })
                                    setOpen(false)
                                }
                            }}
                          />
                        </td>
               
                       
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default DeliveryTable;
