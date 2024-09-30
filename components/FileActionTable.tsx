"use client";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import TableShimmerLoader from "./TableShimmerLoader";
import EmptyTable from "./EmptyTable";
// import { TableProps } from '@/types';
import Image from "next/image";
import { CloseCircle, More } from "iconsax-react";
import { FilledButton } from "./Button";
// import moment from 'moment';

interface TableProps {
  data?: {
    results: any[];
  };
  loading?: boolean;
  setValue?: Function;
}

const status = [
  {
    id: 1,
    fileRef: "28/08/2024//SAP JF 4621",
    customer: "Customer Name",
    bill: "QT-467877 | 23749",
    sentFrom: "Department Name | Ref NO.",
  },
];

const status2 = [
  { id: 1, city: "New York", address: "1234 Broadway Ave, NY 10001" },
  { id: 2, city: "Los Angeles", address: "5678 Sunset Blvd, CA 90028" },
  { id: 3, city: "Chicago", address: "910 Michigan Ave, IL 60611" },
  { id: 4, city: "Houston", address: "1122 Main St, TX 77002" },
  { id: 5, city: "Miami", address: "45 Ocean Dr, FL 33139" },
  { id: 6, city: "San Francisco", address: "789 Market St, CA 94103" },
  { id: 7, city: "Dallas", address: "654 Maple Ave, Dallas, TX 75201" },
];

const FlieActionTable: FC<TableProps> = ({ data, loading, setValue }) => {
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
        <div className="w-full bg-white border overflow-hidden border-tableBorderGreen rounded-lg">
          <table className="w-full">
            <thead className="w-full p-[18px] border-b border-tableBorderGreen">
              <tr className="w-full flex items-center justify-between bg-tableHeaderGreen">
                <th className="!w-[29px]">
                  <h4 className="text-sm font-normal text-black">#</h4>
                </th>
                <th className="table-header-green-2 border-tableBorderGreen !bg-tableHeaderGreen">
                  <h4 className="text-sm text-black">File Ref</h4>
                </th>
                <th className="table-header-green-2 border-tableBorderGreen !bg-tableHeaderGreen">
                  <h4 className="text-smy">Customer Name</h4>
                </th>
                <th className="table-header-green-2  !bg-tableHeaderGreen">
                  <h4 className="text-sm">BILL OF LODING NO.</h4>
                </th>
                <th className="table-header-green-2 !bg-tableHeaderGreen">
                  Sent From
                </th>
                <th className="table-header-green-2 !bg-tableHeaderGreen !border-r-0">
                  Action
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
                    status.map((item, idx) => (
                      <tr className="w-full flex items-center border-b border-tableBorderGreen last:border-b-0 justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                        <td className="!w-[29px] flex items-center justify-center">
                          <p className="text-sm text-black">{idx + 1}</p>
                        </td>

                        <td className="table-body-green-2 !justify-start">
                          <div className="w-full h-full flex flex-col items-start justify-center">
                            <p className="text-[11px] text-grey500">
                              {item.fileRef?.split("//")[0]}
                            </p>
                            <p className="text-[13px] text-dark900">
                              {item.fileRef?.split("//")[1]}
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green-2">
                          <p className="text-[13px] text-dark900">
                            {item.customer}
                          </p>
                        </td>
                        <td className="table-body-green-2">
                          <div className="flex flex-col items-center ">
                            <p className="text-[13px] text-dark900">
                              {item.bill}
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green-2">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              {item.sentFrom}
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green-2">
                          <div className="w-full h-full flex items-center ">
                            <div className="w-full py-[9px] flex items-center justify-center gap-1">
                              <FilledButton
                                text="Dismiss"
                                pClass="font-medium text-dismiss"
                                btnClass="!w-fit gap-1"
                              />
                              <CloseCircle
                                className="text-dismiss "
                                size={20}
                              />
                            </div>
                            <div className="w-full py-[9px] flex items-center justify-center gap-1">
                              <FilledButton
                                text="Accept"
                                pClass="font-medium text-accept"
                                btnClass="!w-fit"
                              />
                              <CloseCircle className="text-accept" size={20} />
                            </div>
                          </div>
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
export default FlieActionTable;
