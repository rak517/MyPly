'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

/**
 * Root component for the Sheet UI, providing the container for the sliding panel and its dialog behavior.
 *
 * Forwards all props to the underlying dialog root and adds a `data-slot="sheet"` attribute for identification.
 */
function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot='sheet' {...props} />;
}

/**
 * Renders an element that triggers the opening of the sheet when interacted with.
 *
 * Forwards all props to the underlying trigger primitive and adds a `data-slot="sheet-trigger"` attribute.
 */
function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot='sheet-trigger' {...props} />;
}

/**
 * Renders a close button for the sheet, forwarding all props to the underlying primitive.
 *
 * @remark
 * Adds a `data-slot="sheet-close"` attribute for identification.
 */
function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot='sheet-close' {...props} />;
}

/**
 * Renders the sheet content in a React portal, allowing it to be mounted outside the DOM hierarchy of the parent component.
 *
 * Forwards all props to the underlying portal primitive and adds a `data-slot="sheet-portal"` attribute for identification.
 */
function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot='sheet-portal' {...props} />;
}

/**
 * Renders a semi-transparent overlay behind the sheet, with animated transitions for open and closed states.
 *
 * @param className - Additional class names to apply to the overlay.
 */
function SheetOverlay({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot='sheet-overlay'
      className={cn('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className)}
      {...props}
    />
  );
}

/**
 * Renders the main content area of the sheet, including overlay, slide-in animation, and a close button.
 *
 * @param side - The side from which the sheet appears: 'top', 'right', 'bottom', or 'left'. Defaults to 'right'.
 *
 * @remark
 * The sheet content is rendered inside a portal and includes an overlay. Animations and positioning are determined by the {@link side} prop.
 */
function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot='sheet-content'
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          side === 'right' && 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          side === 'left' && 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          side === 'top' && 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
          side === 'bottom' && 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className='ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none'>
          <XIcon className='size-4' />
          <span className='sr-only'>Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

/**
 * Renders the header section of a sheet with vertical layout and spacing.
 *
 * @param className - Additional class names to apply to the header container.
 */
function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot='sheet-header' className={cn('flex flex-col gap-1.5 p-4', className)} {...props} />;
}

/**
 * Renders the footer section of a sheet with padding and vertical spacing.
 *
 * @remark The footer is positioned at the bottom of the sheet and is typically used for action buttons or supplementary content.
 */
function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot='sheet-footer' className={cn('mt-auto flex flex-col gap-2 p-4', className)} {...props} />;
}

/**
 * Renders the title of the sheet with emphasized styling.
 *
 * Forwards all props to the underlying Radix UI title primitive and adds a `data-slot="sheet-title"` attribute.
 */
function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return <SheetPrimitive.Title data-slot='sheet-title' className={cn('text-foreground font-semibold', className)} {...props} />;
}

/**
 * Renders descriptive text within a sheet, styled with muted foreground and small font size.
 *
 * @remark
 * Forwards all additional props to the underlying Radix UI Description primitive.
 */
function SheetDescription({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return <SheetPrimitive.Description data-slot='sheet-description' className={cn('text-muted-foreground text-sm', className)} {...props} />;
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
