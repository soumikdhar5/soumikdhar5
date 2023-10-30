import {action, makeObservable, observable} from "mobx"
import { centerData } from "../Centerdata"

class Mobaction{

    selectxt = []
    newcheck = ''

    constructor() {
        makeObservable(this,
            {
                selectxt:observable,
                displaySelected:action
            })
    }

    displaySelected=(selectedValue)=>{
        const displayedValue = centerData.filter((elem)=>elem.key.includes(selectedValue))[0].value
        this.newcheck = displayedValue
        
    }   

    displayText =()=>{
        console.log("data from MobX", this.newcheck )
        return this.newcheck
    }
    
}

export const mobaction = new Mobaction()