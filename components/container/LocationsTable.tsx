"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Image from "next/image";
import TableShimmerLoader from "@/components/ShimmerLoader";
import { FilledButton } from "../Button";
import CheckBox from "../CheckBox";
import { locationsTableData } from "@/data";
// import moment from 'moment';

interface TableProps {
  data?: {
    results: any[];
  };
  loading?: boolean;
}

const LocationsTable: FC<TableProps> = ({ data, loading }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [sortedResults, setSortedResults] = useState([] as any);
  const [search, setSearch] = useState<string>("");
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
                <th className="table-header-green-4 !border-l-0 !justify-center">
                  <h4 className="text-sm font-medium text-dark900">
                    Location
                  </h4>
                </th>
                <th className="table-header-green-4 !justify-center">
                  <h4 className="text-sm font-medium !text-left text-dark900">
                    File Reference
                  </h4>
                </th>
                <th className="table-header-green-4 !justify-center">
                  <h4 className="text-sm font-medium !text-left text-dark900">
                    Branch
                  </h4>
                </th>
                <th className="table-header-green-4 !justify-center border-r">
                  <h4 className="text-sm font-medium !text-left text-dark900">
                    Barcode
                  </h4>
                </th>
                <th className="!w-[136px] h-[36px] flex items-center !justify-center border-r">
                  <h4 className="text-sm font-medium !text-left text-dark900">
                    Status
                  </h4>
                </th>
                
                <th className="w-[51px] h-9 "></th>
              </tr>
            </thead>

            {/* SEARCH INPUT */}
            <div className="w-full relative flex items-center justify-center">
              {!search && (
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4 py-[6px]">
                  <Image
                    src={require("@/assets/icons/search.svg")}
                    alt="search"
                  />
                  <p className="text-[13px] text-grey500 font-normal">Search</p>
                </div>
              )}
              <input
                type="text"
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value);
                }}
                className="border-b w-full text-center py-[6px]"
              />
            </div>
            <tbody
              className={`flex flex-col ${
                loading && "animate-pulse w-full flex flex-col mt-4 px-4 mb-4"
              }`}
            >
              {loading ? (
                <TableShimmerLoader />
              ) : (
                <>
                  {locationsTableData &&
                    locationsTableData.map((item) => (
                      <tr className="w-full flex items-center last:border-b-0 border-b border-tableBorderGreen justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer">
                        <td className="table-body4 relative !border-l-0">
                            <div className="absolute top-0 left-0 p-[2px]"> 
                                <CheckBox checked={true} setChecked={() => {}}/>
                            </div>
                            <p className="text-grey900 text-sm">{item.location }</p>
                        </td>
                        <td className="table-body4">
                            <p className="text-grey900 text-sm">{ item.fileRef }</p>
                        </td>
                        <td className="table-body4">
                            <p className="text-grey900 text-sm">{ item.branch }</p>
                        </td>
                        <td className="table-body4 border-r">
                            <FilledButton
                                text="View"
                                pClass="text-sec700 text-base !font-normal"
                            />
                        </td>



                        <td className="w-[136px] border-r h-[60px] flex items-center justify-center">
                          {item.status === "Inactive" && (
                            <p className="py-1 px-[10px] w-fit text-xs text-center bg-canceled rounded">
                              {item.status}
                            </p>
                          )}
                          {item.status === "Pending" && (
                            <p className="py-1 px-[10px] w-fit text-xs text-center bg-processing text-white rounded">
                              {item.status}
                            </p>
                          )}
                          {item.status === "Active" && (
                            <p className="py-1 px-[10px] w-fit text-xs text-center bg-success rounded">
                              {item.status}
                            </p>
                          )}
                        </td>
                        <td className="w-[51px] h-[60px] flex items-center justify-center">
                          <FilledButton
                            text=""
                            image={require("@/assets/icons/more.svg")}
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
export default LocationsTable;
