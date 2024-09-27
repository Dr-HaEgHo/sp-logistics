"use client";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import TableShimmerLoader from "./TableShimmerLoader";
import EmptyTable from "./EmptyTable";
// import { TableProps } from '@/types';
import Image from "next/image";
import { More } from "iconsax-react";
// import moment from 'moment';

interface TableProps {
  data?: {
    results: any[];
  };
  loading?: boolean;
}

const status = [
  { id: 1, status: "Canceled" },
  { id: 2, status: "Waiting For Documents" },
  { id: 3, status: "Under Process" },
  { id: 4, status: "Delivered" },
  { id: 5, status: "Status" },
  { id: 6, status: "Status" },
];

const Table: FC<TableProps> = ({ data, loading }) => {
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
            <thead className="w-full border-b border-tableStroke p-[18px] ">
              <tr className="w-full flex items-center px-2 justify-between bg-grey100">
                <th className="table-header !border-l-0">
                  <h4>
                    Date / File Ref <br /> Customer
                  </h4>
                </th>
                <th className="table-header">
                  <h4 className="">
                    <span className="font-bold">BILL OF LODING NO.</span> <br />
                    Customer Ref NO.
                  </h4>
                </th>
                <th className="table-header">
                  <h4>
                    <span className="font-bold">Movement type</span> <br />
                    Port
                  </h4>
                </th>
                <th className="table-header">
                  <h4>Arrival date</h4>
                </th>
                <th className="table-header max-w-[167px]">
                  <h4>Status</h4>
                </th>
                <th className="w-[51px]">
                  <h4 className="font-normal text-[13px]">cmd</h4>
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
                      <tr className="w-full flex items-center border-b px-2 justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                        <td className="table-body !border-l-0 !justify-start">
                          <div className="flex items-center gap-2">
                            {/* checkboxes */}
                            <div
                              className="cursor-pointer flex item-center justify-center"
                              onClick={() => setChecked(!checked)}
                            >
                              {checked ? (
                                <Image
                                  src={require("../assets/icons/check.svg")}
                                  alt="unchecked"
                                  className="w-6 h-6 object-cover"
                                />
                              ) : (
                                <Image
                                  src={require("../assets/icons/checkbox.svg")}
                                  alt="unchecked"
                                  className="w-6 h-6 object-cover p-[1px]"
                                />
                              )}
                            </div>
                            {/* other side */}
                            <div className="text-left">
                              <p className="text-grey500 text-[11px]">
                                20/08/2024
                              </p>
                              <p className="text-grey900 font-normal text-[13px]">
                                SAP JF 4621
                              </p>
                              <p className="text-grey900 font-bold text-[13px]">
                                Customer name
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="table-body">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-bold text-[13px]">
                              QT-467877 | 23749
                            </p>
                            <p className="text-grey900 font-normal text-[13px]">
                              #4651
                            </p>
                          </div>
                        </td>
                        <td className="table-body">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-bold text-[13px]">
                              Air
                            </p>
                            <p className="text-grey900 font-normal text-[13px]">
                              (KKIA) King Khaled International Airport
                            </p>
                          </div>
                        </td>
                        <td className="table-body">
                          <div className="flex gap-2">
                            <Image
                              src={require("../assets/icons/timer.svg")}
                              alt="timer icon"
                              className="w-5 h-5 object-cover"
                            />
                            <div className="text-left">
                              <p className="text-grey900 font-normal text-[13px]">
                                09/09/2024
                              </p>
                              <p className="text-grey900 font-normal text-[13px]">
                                17:35:01
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="table-body max-w-[167px]">
                          <div className="w-full p-[10px]">
                            {
                                stat.status === 'Canceled' && (<p className="py-1 w-full bg-canceled rounded">
                                    { stat.status }
                                  </p>)
                            }
                            {
                                stat.status === 'Waiting For Documents' && (<p className="py-1 w-full bg-pending rounded">
                                    { stat.status }
                                  </p>)
                            }
                            {
                                stat.status === 'Under Process' && (<p className="py-1 w-full bg-processing text-white rounded">
                                    { stat.status }
                                  </p>)
                            }
                            {
                                stat.status === 'Status' && (<p className="py-1 w-full bg-canceled rounded">
                                    { stat.status }
                                  </p>)
                            }
                            {
                                stat.status === 'Delivered' && (<p className="py-1 w-full bg-success rounded">
                                    { stat.status }
                                  </p>)
                            }
                          </div>
                        </td>
                        <td className="w-[51px] flex items-center justify-center">
                          <Image
                            src={require("../assets/icons/more.svg")}
                            alt="button for more"
                            className="w-10 h-10 cursor-pointer hover:bg-grey100 transition duration-200"
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
export default Table;
