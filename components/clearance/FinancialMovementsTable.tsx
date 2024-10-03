// FinancialMovementsTable.tsx

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
  {
    id: 1,
    desc: "Purchase invoice, consectetur adipiscing elit ispum || Lorem ipsum dlor sit",
    date: "09/09/2024",
    amount: -1473.8,
    balance: -1473.8,
  },
  {
    id: 2,
    desc: "Revenue invoice dolor sit amet, consectetur adipiscing elit ispum || Lorem ipsum dlor sit",
    date: "09/09/2024",
    amount: 7000.8,
    balance: -1473.8,
  },
  {
    id: 3,
    desc: "Purchase invoice dolor sit amet, consectetur adipiscing elit ispum || Lorem ipsum dlor sit",
    date: "09/09/2024",
    amount: -5781.83,
    balance: -7255.63,
  },
];

const FinancialMovementsTable: FC<TableProps> = ({ data, loading }) => {
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
        <div className="w-full bg-white border rounded overflow-hidden">
          <table className="w-full">
            <thead className="w-full border-b border-tableStroke p-[18px] ">
              <tr className="w-full flex items-center justify-between bg-grey100">
                <th className="w-[212px] !border-l-0">
                  <h4 className="text-sm font-medium text-dark900">The Date</h4>
                </th>
                <th className="table-header-2 border-r">
                  <h4 className="text-sm font-medium !text-center text-dark900">
                    Description
                  </h4>
                </th>
                <th className="min-w-[95px] h-9 border-r flex items-center justify-center">
                  <h4 className="text-sm font-medium text-dark900">Amount</h4>
                </th>
                <th className="w-[144px] h-9 flex items-center justify-center border-r-0">
                  <h4 className="text-sm font-medium text-dark900">
                    Balance After
                  </h4>
                </th>
              </tr>
            </thead>

            <tbody
              className={`flex flex-col ${
                loading && "animate-pulse w-full flex flex-col mt-4 px-4 mb-4"
              }`}
            >
              <tr className="w-full flex items-center last:border-b-0 border-b border-tableBorderGreen justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                <td className="w-full h-9 pl-8 border-r-0 flex items-center justify-start">
                  <p className="text-grey900 text-sm font-bold">
                    Beginning Balance
                  </p>
                </td>

                <td className="min-w-[95px] h-9 border-r border-l-0 flex items-center justify-center">
                  <h4 className="text-sm font-medium text-dark900"></h4>
                </td>

                <td className="min-w-[144px] h-9  flex items-center justify-center">
                  <p className="text-sm font-bold"> 0.00 SAR</p>
                </td>
              </tr>
              {loading ? (
                <TableShimmerLoader />
              ) : (
                <>
                  {status &&
                    status.map((stat) => (
                      <tr className="w-full flex items-center last:border-b-0 border-b border-tableBorderGreen justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                        <td className="w-[212px] flex-col pl-3 !border-l-0 !justify-center">
                          <div className="h-full flex items-start justify-center gap-2">
                            <p className="text-grey900 text-sm">{ stat.date }</p>
                          </div>
                        </td>

                        <td className="table-body4 flex-col border-r">
                          <div className="w-full h-full flex flex-col items-center justify-center">
                            <p className="text-grey900 text-sm">{stat.desc}</p>
                          </div>
                        </td>

                        <td className="min-w-[95px] h-[60px] flex items-center justify-center border-r">
                          <div className="w-full h-full flex items-center gap-2 justify-center">
                            {stat.amount > 0 && (
                              <p className="py-1 px-[10px] w-fit text-xs text-center text-improve rounded">
                                +{stat.amount}0
                              </p>
                            )}
                            {stat.amount < 0 && (
                              <p className="py-1 px-[10px] w-fit text-sm text-center text-decline">
                                {stat.amount}
                              </p>
                            )}
                          </div>
                        </td>

                        <td className="w-[144px] border-r h-[60px] flex items-center justify-center">
                          {stat.balance > 0 && (
                            <p className="py-1 px-[10px] w-fit text-xs text-center text-improve rounded">
                              {stat.balance}
                            </p>
                          )}
                          {stat.balance < 0 && (
                            <p className="py-1 px-[10px] w-fit text-sm text-center text-decline">
                              {stat.balance}
                            </p>
                          )}
                        </td>
                        
                      </tr>
                    ))}
                </>
              )}

              <tr className="w-full flex items-center last:border-b-0 border-b border-tableBorderGreen justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                <td className="w-full h-9 pl-8 border-r-0 flex items-center justify-start">
                  <p className="text-grey900 text-sm font-bold">
                    Total Revenue
                  </p>
                </td>

                <td className="min-w-[95px] h-9 border-r border-l-0 flex items-center justify-center">
                  <h4 className="text-sm font-medium text-dark900"></h4>
                </td>

                <td className="min-w-[144px] h-9  flex items-center justify-center">
                  <p className="text-sm font-bold text-improve"> 1000.00 SAR</p>
                </td>
              </tr>

              <tr className="w-full flex items-center last:border-b-0 border-b border-tableBorderGreen justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                <td className="w-full h-9 pl-8 border-r-0 flex items-center justify-start">
                  <p className="text-grey900 text-sm font-bold">
                    Total Expenses
                  </p>
                </td>

                <td className="min-w-[95px] h-9 border-r border-l-0 flex items-center justify-center">
                  <h4 className="text-sm font-medium text-dark900"></h4>
                </td>

                <td className="min-w-[144px] h-9  flex items-center justify-center">
                  <p className="text-sm font-bold text-decline">
                    {" "}
                    -7,255.63 SAR
                  </p>
                </td>
              </tr>

              <tr className="w-full bg-bg2 flex items-center last:border-b-0 border-b border-tableBorderGreen justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                <td className="w-full h-9 pl-8 border-r-0 flex items-center justify-start">
                  <p className="text-grey900 text-sm font-bold">
                    End of term balance
                  </p>
                </td>

                <td className="min-w-[95px] h-9 border-r border-l-0 flex items-center justify-center">
                  <h4 className="text-sm font-medium text-dark900"></h4>
                </td>

                <td className="min-w-[144px] h-9  flex items-center justify-center">
                  <p className="text-sm font-bold text-grey900">
                    {" "}
                    6,255.63 SAR
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default FinancialMovementsTable;
