'use client'
import { FilledButton } from "@/components/Button";
import Details from "@/components/clearance/details/Details";
import NotesAndDocuments from "@/components/clearance/details/NotesAndDocuments";
import PurchaseInvoice from "@/components/clearance/details/PurchaseInvoice";
import Quotation from "@/components/clearance/details/Quotations";
import SalesInvoice from "@/components/clearance/details/SalesInvoice";
import TrackAction from "@/components/clearance/details/TrackAction";
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
        {
            tab === 'notes/documents' && (<NotesAndDocuments/>)
        }
        {
            tab === 'track-action' && (<TrackAction/>)
        }
    </div>
  )
}

export default Page;