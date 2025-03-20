"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-md flex flex-col gap-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = ({ checked, ...props }: any) => (
  <DropdownMenuItem className="flex items-center" {...props}>
    <span className="mr-2">
      <Check className={`h-4 w-4 ${checked ? "opacity-100" : "opacity-0"}`} />
    </span>
    {props.children}
  </DropdownMenuItem>
)

const DropdownMenuRadioItem = ({ checked, ...props }: any) => (
  <DropdownMenuItem className="flex items-center" {...props}>
    <span className="mr-2">
      <Circle className={`h-4 w-4 ${checked ? "opacity-100" : "opacity-0"}`} />
    </span>
    {props.children}
  </DropdownMenuItem>
)

const DropdownMenuLabel = ({ children, ...props }: any) => (
  <DropdownMenuPrimitive.Label className="font-medium text-gray-900" {...props}>
    {children}
  </DropdownMenuPrimitive.Label>
)

const DropdownMenuSeparator = ({ ...props }: any) => (
  <DropdownMenuPrimitive.Separator className="my-2 border-t border-gray-200" {...props} />
)

const DropdownMenuShortcut = ({ children, ...props }: any) => (
  <span className="ml-auto text-xs text-gray-500" {...props}>
    {children}
  </span>
)

const DropdownMenuGroup = ({ children, ...props }: any) => (
  <DropdownMenuPrimitive.Group {...props}>{children}</DropdownMenuPrimitive.Group>
)

const DropdownMenuPortal = ({ children, ...props }: any) => (
  <DropdownMenuPrimitive.Portal {...props}>{children}</DropdownMenuPrimitive.Portal>
)

const DropdownMenuSub = ({ children, ...props }: any) => (
  <DropdownMenuPrimitive.Sub {...props}>{children}</DropdownMenuPrimitive.Sub>
)

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn("bg-white rounded-md shadow-md p-2 w-48", className)}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuSubTrigger = ({ children, ...props }: any) => (
  <DropdownMenuPrimitive.SubTrigger className="flex items-center" {...props}>
    {children}
    <ChevronRight className="ml-2 h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
)

const DropdownMenuRadioGroup = ({ children, ...props }: any) => (
  <DropdownMenuPrimitive.RadioGroup {...props}>{children}</DropdownMenuPrimitive.RadioGroup>
)

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

