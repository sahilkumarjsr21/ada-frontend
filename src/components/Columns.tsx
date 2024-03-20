"use client"
import { AxeRule } from "@/utils/axerules"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {CaretSortIcon} from '@radix-ui/react-icons'


export const columns: ColumnDef<AxeRule>[] = [
    {id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ), cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "ruleId",
        header: "Rule Id",
        enableSorting: true,
        enableHiding: false
      },
      {
        accessorKey: "description",
        header: "Description",
        enableSorting: false,
        enableHiding: false
      },
      {
        accessorKey: "impact",
        header: ({ column }) => {
            return (
                <div className="flex align-middle items-center">
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() as string === 'asc')}
              >
                Impact
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
              </div>
            )
          },
        enableHiding: false
      },
      {
        accessorKey: "tags",
        header: "Tags",
        enableHiding: true
      },
      {
        accessorKey: "issueType",
        header: "Issue Types",
        enableHiding: true
      }
]