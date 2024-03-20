"use client"
import {useCallback, useState} from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { DataTable } from './DataTable'
import { columns } from './Columns'
import { axeRulesData } from '@/utils/axerules'
import {useIsRuleEnabled, useUpdateIsRuleEnabled, useUpdateSelectedRows} from '@/components/DiffView/context/diffcontext'
import { Bolt } from 'lucide-react'
import { Row } from '@tanstack/react-table'

function RulesModalComponent() {
    const [selectedTableRowModel, setSelectedTableRowModel] = useState<Row<any>[]>([])
    const update = useUpdateSelectedRows()
    const handleModalClose = (isOpen: boolean) => {
        !isOpen && update(selectedTableRowModel)
    }
    const isRulesEnabled = useIsRuleEnabled()
    const selectedRows = useCallback(() => {
        const data:Record<string, boolean> = {};
        selectedTableRowModel.forEach(row => data[row.id]=true)
        return data;
    }, [selectedTableRowModel])
    
    return (
        <span className={`flex justify-end mr-3`}>
            <Dialog onOpenChange={handleModalClose}>
                <DialogTrigger>
                    <div className='relative'>
                        <Bolt size={30}></Bolt>
                        <span className={`border-[5px] rounded-lg border-red-300 absolute animate-pulse ${(isRulesEnabled || selectedTableRowModel.length > 0) ? 'inline-block' : 'hidden'} -top-[2px] -right-[2px] z-30`}></span>
                    </div>
                </DialogTrigger>
                <DialogContent className='overflow-y-scroll max-h-[800px] lg:max-w-screen-lg'>
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">
                            <div className='flex align-middle justify-between space-x-2 mr-10'>
                                <div>Axe <span className='hidden md:inline'>HTML</span> Rules</div>
                            </div>
                        </DialogTitle>
                        <DialogDescription className="max-w-screen-lg">
                            <DataTable
                                columns={columns}
                                data={axeRulesData}
                                defaultSelectedRows={selectedRows}
                                setTableRowModel={setSelectedTableRowModel}
                                selectedTableRowModel={selectedTableRowModel}
                                />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </span>
    )
}

export default RulesModalComponent