"use client";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
// import { TableProps } from '@/types';
import Image from "next/image";
import TableShimmerLoader from "@/components/TableShimmerLoader";
import { FilledButton } from "@/components/Button";

interface TableProps {
  data?: {
    results: any[];
  };
  loading?: boolean;
  setValue?: Function;
  setOpen?: Function;
}

const status = [
  { id: 1, acctNo: "1234", name: "warehouse 1", city: "New York", address: "1234 Broadway Ave, NY 10001" },
];

const TruckTable: FC<TableProps> = ({ data, loading, setValue, setOpen }) => {
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
        <div className="w-full bg-white rounded-lg border border-tableBorderGreen overflow-hidden">
          <table className="w-full">
            <thead className="w-full p-[18px] ">
              <tr className="w-full flex items-center justify-between bg-tableHeaderGreen border-b border-tableBorderGreen">
                <th className="table-header-green-3 !bg-tableHeaderGreen !border-l-0">
                  <h4 className="text-sm text-black"> 
                    Plate Number
                  </h4>
                </th>
                <th className="table-header-green-3 !bg-tableHeaderGreen">
                  <h4 className="text-sm">
                    Truck Type
                  </h4>
                </th>
                <th className="table-header-green-3 !bg-tableHeaderGreen">
                  <h4 className="text-sm">
                   Vehicle Country
                  </h4>
                </th>
                <th className="table-header-green-3 !bg-tableHeaderGreen border-r">
                  <h4 className="text-sm">
                  Year of Manufacturing
                  </h4>
                </th>
                <th className="w-[51px] !bg-tableHeaderGreen">
                  
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
                      <tr className="w-full flex items-center justify-between border-b border-tableBorderGreen hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                        <td className="table-body-green-3 !border-l-0 !justify-start">
                          <p className="w-full flex items-center justify-center gap-2">
                            ABC 1234
                          </p>
                        </td>
                        <td className="table-body-green-3">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              Box Truck
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green-3">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              Saudi Arabia
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green-3 border-r">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              2021
                            </p>
                          </div>
                        </td>
                        <td className="!w-[51px] flex items-center justify-center !border-r-0">
                            <FilledButton>
                                
                                <Image
                                    src={require('@/assets/icons/more.svg')}
                                    alt="more button"
                                />
                            </FilledButton>
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
export default TruckTable;
