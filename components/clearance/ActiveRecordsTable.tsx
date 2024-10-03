"use client";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import TableShimmerLoader from "@/components/ShimmerLoader";
import { FilledButton } from "../Button";
// import moment from 'moment';

interface TableProps {
  data?: {
    results: any[];
  };
  loading?: boolean;
}

const status = [
  { id: 1, desc: "Edit1 -----> Edit2",from: "Status 1", to: "Status 2", type: "Change status", status: "Pending" },
  { id: 2, desc: "Shipment #000000000 arrived at customs for clearance.",from: "Department 1", to: "Department 2", type: "Move file", status: "Rejected" },
  { id: 3, desc: "Uploaded PDF contract for shipment #000000000.",from: "Status 1", to: "Status 2", type: "Change status", status: "Completed" },
  { id: 4, desc: "Payment of $11,111.11 for invoice #0000 received.",from: "Status 1", to: "Status 2", type: "Change status", status: "Completed" },
];

const ActiveRecordsTable: FC<TableProps> = ({ data, loading }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [sortedResults, setSortedResults] = useState([] as any);
  const [domLoaded, setDomLoaded] = useState(false);
  const router = useRouter();

  const sortResults = () => {
    // if (data.results) {
    //     console.log("results in table:::", data.results)
    //     const dataCopy: any[] = [@.data.results]
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
        <div className="w-full bg-white border rounded-tr rounded-tl overflow-hidden">
          <table className="w-full">
            <thead className="w-full border-b border-tableStroke p-[18px] ">
              <tr className="w-full flex items-center justify-between bg-bg2">
                <th className="w-[156px] !border-l-0">
                  <h4 className="text-sm font-medium text-dark900">
                    Date & Time
                  </h4>
                </th>
                <th className="table-header-green-4 border-r">
                  <h4 className="text-sm font-medium !text-left text-dark900">
                    Description
                  </h4>
                </th>
                <th className="min-w-[166px] h-9 border-r flex items-center justify-center">
                  <h4 className="text-sm font-medium text-dark900">
                    Created By
                  </h4>
                </th>
                <th className="w-[136px] h-9 flex items-center justify-center border-r">
                  <h4 className="text-sm font-medium text-dark900">
                    Action Status
                  </h4>
                </th>
                <th className="w-[51px] h-9 !border-r-0">
                 
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
                    status.map((stat) => (
                      <tr className="w-full flex items-center last:border-b-0 border-b border-tableBorderGreen justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                        <td className="w-[156px] flex-col pl-3 !border-l-0 !justify-center">
                          
                            <div className="h-full flex items-start justify-center gap-2">
                              <p className="text-grey900 text-sm">Sep 21, 2024</p>
                              <p className="text-grey900 text-sm">17:45</p>
                            </div>
                        </td>

                        <td className="table-body4 flex-col border-r">
                          <div className="w-full h-full flex flex-col items-start justify-center">
                            <p className="text-grey900 text-sm">
                              From: {`{${stat.from}}`}
                            </p>
                            <p className="text-grey900 text-sm">
                              To: {`{${stat.to}}`}
                            </p>
                          </div>
                        </td>

                        <td className="min-w-[166px] h-[60px] flex items-center justify-center border-r">
                          <div className="w-full h-full flex items-center gap-2 justify-center">
                            <Image
                              src={require("@/assets/icons/person.svg")}
                              alt="timer icon"
                              className="w-5 h-5"
                            />
                            <p className="text-grey900 text-sm text-center">
                              Name Surname
                            </p>
                          </div>
                        </td>

                        <td className="w-[136px] border-r h-[60px] flex items-center justify-center">
                        {stat.status === "Rejected" && (
                                <p className="py-1 px-[10px] w-fit text-xs text-center bg-canceled rounded">
                                  {stat.status}
                                </p>
                              )}
                              {stat.status === "Pending" && (
                                <p className="py-1 px-[10px] w-fit text-xs text-center bg-processing text-white rounded">
                                  {stat.status}
                                </p>
                              )}
                              {stat.status === "Completed" && (
                                <p className="py-1 px-[10px] w-fit text-xs text-center bg-success rounded">
                                  {stat.status}
                                </p>
                              )}                    
                        </td>
                        <td className="w-[51px] h-[60px] flex items-center justify-center">
                            <FilledButton
                                text=""
                                image={require('@/assets/icons/more.svg')}
                                pClass="text-sm text-grey800 font-semibold"
                                btnClass="!w-fit"
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
export default ActiveRecordsTable;
