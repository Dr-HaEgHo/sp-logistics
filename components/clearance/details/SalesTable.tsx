"use client";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import TableShimmerLoader from "@/components/ShimmerLoader";
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

const SalesTable: FC<TableProps> = ({ data, loading }) => {
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
        <div className="w-full bg-white rounded-lg">
          <table className="w-full">
            <thead className="w-full border-b border-tableStroke p-[18px] ">
              <tr className="w-full flex items-center justify-between bg-grey100">
                <th className="table-header !border-l-0">
                  <h4 className="text-sm font-medium text-dark900">
                    Invoice / Client
                  </h4>
                </th>
                <th className="table-header">
                  <h4 className="text-sm font-medium text-dark900">
                    Project / Location
                  </h4>
                </th>
                <th className="table-header">
                  <h4 className="text-sm font-medium text-dark900">
                    Date / Created By
                  </h4>
                </th>
                <th className="table-header !border-r-0">
                  <h4 className="text-sm font-medium text-dark900">
                    Amount / Status
                  </h4>
                </th>
               
                <th className="w-[51px]">
                  {/* <h4 className="font-normal text-[13px]">cmd</h4> */}
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
                      <tr className="w-full flex items-center border-b justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                        <td className="table-body-2 flex-col !border-l-0 !justify-start">
                          <div className="w-full h-[60px] border-b flex flex-col gap-2 relative">
                            {/* checkboxes */}
                            <div
                              className="cursor-pointer absolute top-[5px] left-0 flex item-center justify-center"
                              onClick={() => setChecked(!checked)}
                            >
                              {checked ? (
                                <Image
                                  src={require("@/assets/icons/check.svg")}
                                  alt="unchecked"
                                  className="w-6 h-6 object-cover"
                                />
                              ) : (
                                <Image
                                  src={require("@/assets/icons/checkbox.svg")}
                                  alt="unchecked"
                                  className="w-6 h-6 object-cover p-[1px]"
                                />
                              )}
                            </div>
                            {/* other side */}
                            <div className="h-full flex items-center justify-center">
                              <p className="text-grey900 text-sm">#0000</p>
                            </div>
                          </div>
                          <div className="w-full h-[60px] flex items-center justify-center">
                            <p className="text-grey900 text-base font-bold text-center">
                              Client Name: Example Logistics
                            </p>
                          </div>
                        </td>

                        <td className="table-body-2 flex-col">
                          <div className="w-full h-[60px] border-b flex flex-col gap-2 relative">
                            <div className="h-full flex items-center justify-center">
                              <p className="text-grey900 text-sm">
                                Project #0000 <br /> Dry Port
                              </p>
                            </div>
                          </div>
                          <div className="w-full h-[60px] flex items-center justify-center">
                            <p className="text-grey900 text-sm text-center">
                              Example City, Main Street, <br /> Central 12345
                            </p>
                          </div>
                        </td>
                        <td className="table-body-2 flex-col">
                          <div className="w-full h-[60px] border-b flex flex-col gap-2 relative">
                            <p className="text-sec800 text-[11.5px] font-semibold">
                              Printed
                            </p>
                            <div className="h-full flex items-center justify-center gap-2">
                              <Image
                                src={require("@/assets/icons/timer.svg")}
                                alt="timer icon"
                                className="w-5 h-5"
                              />
                              <p className="text-grey900 text-sm">09/09/2024</p>
                              <p className="text-grey900 text-sm">17:35:01</p>
                            </div>
                          </div>
                          <div className="w-full h-[60px] flex items-center gap-2 justify-center">
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
                        <td className="table-body-2 flex-col">
                          <div className="w-full h-[60px] border-b flex flex-col gap-2 relative">
                            <div className="h-full flex items-center justify-center">
                              {stat.status === "Partially Paid" && (
                                <p className="py-1 px-[10px] w-fit bg-pending rounded">
                                  {stat.status}
                                </p>
                              )}
                              {stat.status === "Status" && (
                                <p className="py-1 px-[10px] w-fit bg-processing text-white rounded">
                                  {stat.status}
                                </p>
                              )}
                              {stat.status === "Paid" && (
                                <p className="py-1 px-[10px] w-fit bg-success rounded">
                                  {stat.status}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="w-full h-[60px] flex items-center justify-center">
                            <p className="text-dark900 text-base text-center font-bold">
                              1,000.00 SAR
                            </p>
                          </div>
                        </td>
                       
                        <td className="w-[51px] flex items-center justify-center">
                          <Image
                            src={require("@/assets/icons/more.svg")}
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
export default SalesTable;
