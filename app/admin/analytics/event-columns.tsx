import React from "react"
import { ResumeEvent } from "@/lib/types"
import { Column } from "@/components/ui/data-table"

export const columns: Column<ResumeEvent>[] = [
  {
    header: "User ID",
    accessorKey: "id",
  },
  {
    header: "Event Type",
    accessorKey: "event_type",
  },
  {
    header: "Timestamp",
    accessorKey: "timestamp",
    cell: (row: ResumeEvent) => new Date(row.timestamp).toLocaleString(),
  },
  {
    header: "Resume ID",
    accessorKey: "resume_id",
  },
] 