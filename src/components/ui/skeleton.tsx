import { cn } from "@/lib/utils"

/**
 * Renders a skeleton placeholder div with animated pulse and accent background.
 *
 * Combines default skeleton styling with any additional classes provided via {@link className}, and passes through all other div props.
 *
 * @returns A div element styled as a skeleton loading placeholder.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
