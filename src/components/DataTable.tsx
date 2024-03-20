"use client"
 
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Switch } from "./ui/switch"
import { useIsRuleEnabled, useUpdateIsRuleEnabled } from "./DiffView/context/diffcontext"
 
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  selectedTableRowModel: any,
  setTableRowModel: Dispatch<SetStateAction<Row<any>[]>>,
  defaultSelectedRows: () => Record<string, boolean>
}
 
export function DataTable<TData, TValue>({
  columns,
  data,
  selectedTableRowModel,
  setTableRowModel,
  defaultSelectedRows
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [rowSelection, setRowSelection] = useState(defaultSelectedRows)
  const isRuleEnabled = useIsRuleEnabled()
  // const [isRuleEnabled, setIsRuleEnabled] = useState(false)

  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({})
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  useEffect(() => {
    setTableRowModel(table.getSelectedRowModel().flatRows)
  }, [rowSelection])
  
  const updateRuleEnable = useUpdateIsRuleEnabled()
  const isRuleSet = useIsRuleEnabled()

  const handleSwitchChange = (isChecked: boolean) => {
    updateRuleEnable(isChecked)
  }

 
  return (
    <div className="rounded-md border overflow-clip">
        <div className="flex justify-between items-center py-4 mx-2 ">
            <input
            placeholder="Filter Description..."
            value={(table.getColumn("description")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
                table.getColumn("description")?.setFilterValue(event.target.value)
            }
            className="w-80 p-2 max-w-sm border-gray-800 border rounded-sm"
            />
            <div className='text-sm flex items-center space-x-2 justify-center'>
                <span>{`${isRuleEnabled ? 'Enable' : 'Disable'}`} Selected Rules</span><Switch about='Enable or Disable Rule' checked={isRuleEnabled} onCheckedChange={handleSwitchChange}/></div>
        </div>
      <Table>
        <TableHeader className="bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}