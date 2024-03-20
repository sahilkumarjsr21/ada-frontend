"use client"

import { useSelectedRows } from "./DiffView/context/diffcontext"
import RulesModalComponent from "./RulesModalComponent"

function CheckBox() {
    const rowSelected = useSelectedRows()
    console.log(rowSelected)
    return (
        <div>
        <div className="mt-3 space-x-1 flex relative justify-center items-center">
            <input id="diableRules" type="checkbox" name="disableRules" className="accent-gray-700 text-gray-700 h-4 w-4 rounded-sm "  />
            <label>Select ada rules to disable</label>
            
        </div>
        <RulesModalComponent/>
        </div>
    )
}

export default CheckBox