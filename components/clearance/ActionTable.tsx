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
  { id: 1, status: "Paid" },
  { id: 2, status: "Partially Paid" },
  { id: 3, status: "Partially Paid" },
  { id: 4, status: "Status" },
];

const ActionTable: FC<TableProps> = ({ data, loading }) => {
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
        <div className="w-full bg-white rounded-lg border overflow-hidden">
          <table className="w-full">
            <thead className="w-full border-b border-tableStroke p-[18px] ">
              <tr className="w-full flex items-center justify-between bg-bg2">
                <th className="w-[134px] !border-l-0">
                  <h4 className="text-sm font-medium text-dark900">
                    Date & Time
                  </h4>
                </th>
                <th className="table-header-green-4">
                  <h4 className="text-sm font-medium !text-left text-dark900">
                    Action Statuse
                  </h4>
                </th>
                <th className="table-header-green-4">
                  <h4 className="text-sm font-medium text-dark900">
                    Created By
                  </h4>
                </th>
                <th className="table-header-green-4 !border-r-0">
                  <h4 className="text-sm font-medium text-dark900">
                    Action Type
                  </h4>
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
                        <td className="w-[134px] flex-col pl-3 !border-l-0 !justify-center">
                          <div className="w-full flex items-start gap-2 relative">
                            <Image
                              src={require("@/assets/icons/timer.svg")}
                              alt="timer icon"
                              className="w-5 h-5"
                            />
                            <div className="h-full flex flex-col items-start justify-center gap-2">
                              <p className="text-grey900 text-sm">09/09/2024</p>
                              <p className="text-grey900 text-sm">17:35:01</p>
                            </div>
                          </div>
                        </td>

                        <td className="table-body4 flex-col">
                          <div className="w-full h-full flex flex-col items-start justify-center">
                            <p className="text-grey900 text-sm">
                              From: {'{Status 1}'}
                            </p>
                            <p className="text-grey900 text-sm">
                              To: {'{Status 2}'}
                            </p>
                          </div>
                        </td>
                        <td className="table-body4 flex-col">
                          <div className="w-full h-full flex items-center gap-2 justify-start">
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
                        <td className="table-body4 flex-col">
                          <FilledButton
                            text="Change Status"
                            image={require('@/assets/icons/clockwise-grey800.svg')}
                            pClass="text-sm text-grey800 font-semibold"
                            btnClass="!w-fit border-[0.5px] border-grey500 rounded p-2"
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
export default ActionTable;
