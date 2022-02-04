import { LightningElement, wire } from 'lwc';
import getAccountList from  '@salesforce/apex/GetAccountRecord.acnntrecord'
export default class PaginationComponent extends LightningElement {
    totalaccount
    VisibleRecord
    @wire(getAccountList)
    wiredAccount({error,data})
    {if(data)
        {
         this.totalaccount = data
         console.log(this.totalaccount)
        }
    
    if(error)
    {
        console.error(error)
    }
    
    }
    updateContactRecord(event)
    {
        this.VisibleRecord=[...event.detail.records]
        console.log(event.detail.records)
    }
}