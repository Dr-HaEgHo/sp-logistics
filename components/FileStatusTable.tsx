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
    status: "Accepted"
  },
  {
    id: 2,
    fileRef: "28/08/2024//SAP JF 4621",
    customer: "Customer Name",
    bill: "QT-467877 | 23749",
    sentFrom: "Department Name | Ref NO.",
    status: "Dismissed"
  },
];


const FileStatusTable: FC<TableProps> = ({ data, loading, setValue }) => {
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
                  <h4 className="text-sm">Customer Name</h4>
                </th>
                <th className="table-header-green-2  !bg-tableHeaderGreen">
                  <h4 className="text-sm">BILL OF LODING NO.</h4>
                </th>
                <th className="table-header-green-2 !bg-tableHeaderGreen border-r">
                  Sent From
                </th>
                <th className="!w-[132px] !bg-tableHeaderGreen !border-r-0">
                  <h4 className="text-sm font-normal text-dark800">Status</h4>
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
                        <td className="table-body-green-2 border-r">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              {item.sentFrom}
                            </p>
                          </div>
                        </td>
                        <td className="!w-[132px] px-[10px]">
                            {
                                item.status === "Accepted" && (<p className="w-full bg-acceptLight rounded text-xs !py-1 text-center text-grey1000 font-medium">{item.status}</p>)
                            }                          
                            {
                                item.status === "Dismissed" && (<p className="w-full bg-dismissLight rounded text-xs !py-1 text-center text-grey1000 font-medium">{item.status}</p>)
                            }                          
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
export default FileStatusTable;
