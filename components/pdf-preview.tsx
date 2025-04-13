"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Edit, Save, X } from "lucide-react"

interface PDFPreviewProps {
  text: string
  filename?: string
  onEdit?: (text: string) => void
  className?: string
}

export function PDFPreview({ text, filename, onEdit, className }: PDFPreviewProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(text)

  const handleSave = () => {
    if (onEdit) {
      onEdit(editedText)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedText(text)
    setIsEditing(false)
  }

  return (
    <Card className={`shadow-sm ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <FileText className="h-5 w-5 mr-2 text-primary" />
          {filename ? filename : "Extracted Text"}
        </CardTitle>

        {onEdit && (
          <div>
            {isEditing ? (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleSave} className="flex items-center">
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button variant="ghost" size="sm" onClick={handleCancel} className="flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
              </div>
            ) : (
              <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="flex items-center">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent>
        {isEditing ? (
          <Textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
          />
        ) : (
          <div className="bg-gray-50 p-4 rounded-md border whitespace-pre-wrap font-mono text-sm max-h-[400px] overflow-y-auto">
            {text}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
