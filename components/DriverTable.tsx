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
  setOpen?: Function;
}

const status = [
  { id: 1, acctNo: "1234", name: "warehouse 1", city: "New York", address: "1234 Broadway Ave, NY 10001" },
];

const DriverTable: FC<TableProps> = ({ data, loading, setValue, setOpen }) => {
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
                    Driver Name
                  </h4>
                </th>
                <th className="table-header-green-3 !bg-tableHeaderGreen">
                  <h4 className="text-sm">
                    Id number
                  </h4>
                </th>
                <th className="table-header-green-3 !bg-tableHeaderGreen">
                  <h4 className="text-sm">
                   Plate Number
                  </h4>
                </th>
                <th className="table-header-green-3 !bg-tableHeaderGreen border-r">
                  <h4 className="text-sm">
                  Wathiqa Number
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
                            Name Surname
                          </p>
                        </td>
                        <td className="table-body-green-3">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              1234567899
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green-3">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              1234567890
                            </p>
                          </div>
                        </td>
                        <td className="table-body-green-3 border-r">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              1234567890
                            </p>
                          </div>
                        </td>
                        <td className="!w-[51px] flex items-center justify-center !border-r-0">
                            <FilledButton>
                                
                                <Image
                                    src={require('../assets/icons/more.svg')}
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
export default DriverTable;
