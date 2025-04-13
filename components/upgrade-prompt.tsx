import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface UpgradePromptProps {
  variant?: "default" | "feature"
  feature?: string
}

export function UpgradePrompt({ variant = "default", feature }: UpgradePromptProps) {
  return (
    <div className={variant === "feature" ? "" : "bg-amber-50/50 border border-amber-200 rounded-lg p-6 shadow-soft"}>
      <div className="text-center">
        {variant === "default" && (
          <>
            <h3 className="text-lg font-medium text-gray-800 mb-2 font-serif">Upgrade to Premium</h3>
            <p className="text-gray-600 mb-4">
              Unlock advanced features and get unlimited access to all Lucerna AI tools.
            </p>
          </>
        )}
        <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md btn-hover">
          <Sparkles className="h-4 w-4 mr-2" />
          {variant === "feature" ? `Upgrade to Access ${feature}` : "Upgrade to Premium"}
        </Button>
      </div>
    </div>
  )
}
