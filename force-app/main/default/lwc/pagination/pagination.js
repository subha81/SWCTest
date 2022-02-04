import { LightningElement,api } from 'lwc';

export default class Pagination extends LightningElement {

totalRecords
pagesize = 5
currentPage = 1
TotalPage = 0
get records()
{
    return this.VisibleRecords
}
@api
set records(data)
{
if(data)
{
this.totalRecords = data
this.TotalPage = Math.ceil(data.length/this.pagesize)

this.updaterecords()
}
}   

previoushandler()
    {
      
        if(this.currentPage >1)
        {
            this.curentPage = this.currentPage-1
            this.updaterecords()
        }


    }

    Nexthandler()
    {
        if(this.currentPage < this.TotalPage)
        {
            this.curentPage = this.currentPage+1
            this.updaterecords()
        }

       
    }

    updaterecords()
    {
        const start = (this.curentPage -1 ) * this.pagesize
        const end = this.curentPage * this.pagesize
        this.VisibleRecords = this.totalRecords.slice(start, end)
         this.dispatchEvent(new CustomEvent('update',{
            detail:
        {
            records:this.VisibleRecords
        }
    }))
}

}