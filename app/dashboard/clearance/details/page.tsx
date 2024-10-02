'use client'
import { FilledButton } from "@/components/Button";
import Details from "@/components/clearance/details/Details";
import PurchaseInvoice from "@/components/clearance/details/PurchaseInvoice";
import Quotation from "@/components/clearance/details/Quotations";
import SalesInvoice from "@/components/clearance/details/SalesInvoice";
import { ArrowDown2 } from "iconsax-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {

    const router = useRouter();
    const search = useSearchParams();
    const tab = new URLSearchParams(search).get('tab')

    useEffect(() => {
        if(tab){
            return
          }
    
          router.push('?tab=details')
    },[])

  return (
    <div className="w-full">
        {
            tab === 'details' && (<Details/>)
        }
        {
            tab === 'sales-invoices' && (<SalesInvoice/>)
        }
        {
            tab === 'purchase-invoices' && (<PurchaseInvoice/>)
        }
        {
            tab === 'quotation' && (<Quotation/>)
        }
    </div>
  )
}

export default Page;