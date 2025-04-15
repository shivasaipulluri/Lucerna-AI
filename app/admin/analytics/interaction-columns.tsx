import React from "react"
import { Interaction } from "@/lib/types"
import { Column } from "@/components/ui/data-table"

export const columns: Column<Interaction>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Action",
    accessorKey: "action",
  },
  {
    header: "Element",
    accessorKey: "element",
  },
  {
    header: "Timestamp",
    accessorKey: "timestamp",
    cell: (row: Interaction) => new Date(row.timestamp).toLocaleString(),
  },
  {
    header: "Metadata",
    accessorKey: "metadata",
    cell: (row: Interaction) => JSON.stringify(row.metadata),
  },
] 