"use client";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
// import { TableProps } from '@/types';
import Image from "next/image";
import { CloseCircle, More } from "iconsax-react";
import TableShimmerLoader from "@/components/TableShimmerLoader";
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
//   {
//     id: 2,
//     fileRef: "28/08/2024//SAP JF 4621",
//     customer: "Customer Name",
//     bill: "QT-467877 | 23749",
//     sentFrom: "Department Name | Ref NO.",
//     status: "Dismissed"
//   },
];


const PalletTable: FC<TableProps> = ({ data, loading, setValue }) => {
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
                
                <th className="table-header-green-2 !justify-center border-tableBorderGreen !bg-tableHeaderGreen !border-l-0">
                  <h4 className="text-sm text-black">Pallet Number</h4>
                </th>
                <th className="table-header-green-2 border-tableBorderGreen !justify-center !bg-tableHeaderGreen">
                  <h4 className="text-sm">Number of Packages</h4>
                </th>
                <th className="table-header-green-2 !justify-center  !bg-tableHeaderGreen !border-r">
                  <h4 className="text-sm">Item Quantity</h4>
                </th>
                <th className="!w-[51px]">
                  <h4 className="text-sm font-normal text-black"></h4>
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
                        

                        <td className="table-body-green-2 !justify-center !border-l-0">
                          <p className="text-[13px] text-dark900">
                            Name Surname
                          </p>
                        </td>

                        <td className="table-body-green-2 !justify-center">
                          <div className="flex flex-col items-center ">
                            <p className="text-[13px] text-dark900">
                              1234567899
                            </p>
                          </div>
                        </td>

                        <td className="table-body-green-2 border-r !justify-center">
                          <div className="flex flex-col items-center ">
                            <p className="text-grey900 font-normal text-[13px]">
                              1234567899
                            </p>
                          </div>
                        </td>

                        <td className="!w-[51px] flex items-center justify-center">
                          <button className="w-full h-full flex items-center justify-center">
                                <Image
                                    src={require('@/assets/icons/delete-red.svg')}
                                    alt="delete"
                                />
                          </button>
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
export default PalletTable;
