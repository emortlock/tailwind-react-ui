export type FlexValue =
  | boolean
  | 'row'
  | 'row-reverse'
  | 'col'
  | 'col-reverse'
  | 'no-wrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'initial'
  | 1
  | 'auto'
  | 'none'
  | 'grow'
  | 'shrink'
  | 'grow-0'
  | 'shrink-0'

export type FlexAlignment = 'start' | 'center' | 'end'

export type SpaceValue = {
  t?: string | number
  r?: string | number
  b?: string | number
  l?: string | number
  x?: string | number
  y?: string | number
}

// Display
type Block = boolean
type Hidden = boolean
type Inline = boolean
type InlineBlock = boolean
type Table = boolean
type TableCell = boolean
type TableRow = boolean

// Floats
type Clearfix = boolean
type Float = 'none' | 'right' | 'left'

// Overflow
type Overflow = 'hidden' | 'auto' | 'scroll'

// Position
type Absolute = boolean
type Fixed = boolean
type Inset = '0' | 'y-0' | 'x-0' | 'auto' | number
type Top = number
type Bottom = number
type Left = number
type Right = number
type Relative = boolean
type Static = boolean

// Z-Index
type Z = number | string

// Typography
type Align = string
type Break = 'words' | 'normal'
type Capitalize = boolean
type Font = string | string[]
type Italic = boolean
type Text = string | string[]
type Tracking = string
type Leading = string
type LineThrough = boolean
type Lowercase = boolean
type NormalCase = boolean
type NoUnderline = boolean
type NotItalic = boolean
type Truncate = boolean
type Underline = boolean
type Uppercase = boolean
type Whitespace = 'normal' | 'no-wrap' | 'pre' | 'pre-line' | 'pre-wrap'

// Backgrounds
type Bg = string | string[]

// Borders
type Border = string | boolean | (string | boolean)[]
type BorderSide = number
type Rounded = string | boolean

// Flex
type Content = FlexAlignment | 'between' | 'around'
type Flex = FlexValue | FlexValue[]
type InlineFlex = boolean
type Items = FlexAlignment | 'stretch' | 'baseline'
type Self = FlexAlignment | 'auto' | 'stretch'
type Justify = FlexAlignment | 'between' | 'around'

// Spacing
type M = string | number | SpaceValue
type Nm = string | number | SpaceValue // TODO: Check negative margins
type P = string | number | SpaceValue

// Sizing
type H = string | number
type MaxH = string | number
type MinH = string | number
type MaxW = string | number
type MinW = string | number
type W = string | number

// Misc
type Container = boolean
type Opacity = string | number
type Shadow = string | boolean
type List = 'none' | 'list' | 'decimal'
type Outline = string
type Appearance = string
type Select = string
type PointerEvents = string
type Fill = string
type Cursor =
  | 'auto'
  | 'default'
  | 'pointer'
  | 'wait'
  | 'text'
  | 'move'
  | 'not-allowed'

// Plugins
type VisuallyHidden = boolean

// Helper
type Focusable = boolean

export interface TailwindProps {
  // Display
  'block'?: Block
  'block-hover'?: Block
  'block-focus'?: Block
  'block-hocus'?: Block
  'block-sm'?: Block
  'block-md'?: Block
  'block-lg'?: Block
  'block-xl'?: Block

  'hidden'?: Hidden
  'hidden-hover'?: Hidden
  'hidden-focus'?: Hidden
  'hidden-hocus'?: Hidden
  'hidden-sm'?: Hidden
  'hidden-md'?: Hidden
  'hidden-lg'?: Hidden
  'hidden-xl'?: Hidden

  'inline'?: Inline
  'inline-hover'?: Inline
  'inline-focus'?: Inline
  'inline-hocus'?: Inline
  'inline-sm'?: Inline
  'inline-md'?: Inline
  'inline-lg'?: Inline
  'inline-xl'?: Inline

  'inlineBlock'?: InlineBlock
  'inlineBlock-hover'?: InlineBlock
  'inlineBlock-focus'?: InlineBlock
  'inlineBlock-hocus'?: InlineBlock
  'inlineBlock-sm'?: InlineBlock
  'inlineBlock-md'?: InlineBlock
  'inlineBlock-lg'?: InlineBlock
  'inlineBlock-xl'?: InlineBlock

  'table'?: Table
  'table-hover'?: Table
  'table-focus'?: Table
  'table-hocus'?: Table
  'table-sm'?: Table
  'table-md'?: Table
  'table-lg'?: Table
  'table-xl'?: Table

  'tableCell'?: TableCell
  'tableCell-hover'?: TableCell
  'tableCell-focus'?: TableCell
  'tableCell-hocus'?: TableCell
  'tableCell-sm'?: TableCell
  'tableCell-md'?: TableCell
  'tableCell-lg'?: TableCell
  'tableCell-xl'?: TableCell

  'tableRow'?: TableRow
  'tableRow-hover'?: TableRow
  'tableRow-focus'?: TableRow
  'tableRow-hocus'?: TableRow
  'tableRow-sm'?: TableRow
  'tableRow-md'?: TableRow
  'tableRow-lg'?: TableRow
  'tableRow-xl'?: TableRow

  // Floats
  'clearfix'?: Clearfix
  'clearfix-hover'?: Clearfix
  'clearfix-focus'?: Clearfix
  'clearfix-hocus'?: Clearfix
  'clearfix-sm'?: Clearfix
  'clearfix-md'?: Clearfix
  'clearfix-lg'?: Clearfix
  'clearfix-xl'?: Clearfix

  'float'?: Float
  'float-hover'?: Float
  'float-focus'?: Float
  'float-hocus'?: Float
  'float-sm'?: Float
  'float-md'?: Float
  'float-lg'?: Float
  'float-xl'?: Float

  // Overflow
  'overflow'?: Overflow
  'overflow-hover'?: Overflow
  'overflow-focus'?: Overflow
  'overflow-hocus'?: Overflow
  'overflow-sm'?: Overflow
  'overflow-md'?: Overflow
  'overflow-lg'?: Overflow
  'overflow-xl'?: Overflow

  'overflowX'?: Overflow
  'overflowX-hover'?: Overflow
  'overflowX-focus'?: Overflow
  'overflowX-hocus'?: Overflow
  'overflowX-sm'?: Overflow
  'overflowX-md'?: Overflow
  'overflowX-lg'?: Overflow
  'overflowX-xl'?: Overflow

  'overflowY'?: Overflow
  'overflowY-hover'?: Overflow
  'overflowY-focus'?: Overflow
  'overflowY-hocus'?: Overflow
  'overflowY-sm'?: Overflow
  'overflowY-md'?: Overflow
  'overflowY-lg'?: Overflow
  'overflowY-xl'?: Overflow

  // Position
  'absolute'?: Absolute
  'absolute-hover'?: Absolute
  'absolute-focus'?: Absolute
  'absolute-hocus'?: Absolute
  'absolute-sm'?: Absolute
  'absolute-md'?: Absolute
  'absolute-lg'?: Absolute
  'absolute-xl'?: Absolute

  'fixed'?: Fixed
  'fixed-hover'?: Fixed
  'fixed-focus'?: Fixed
  'fixed-hocus'?: Fixed
  'fixed-sm'?: Fixed
  'fixed-md'?: Fixed
  'fixed-lg'?: Fixed
  'fixed-xl'?: Fixed

  'inset'?: Inset
  'inset-hover'?: Inset
  'inset-focus'?: Inset
  'inset-hocus'?: Inset
  'inset-sm'?: Inset
  'inset-md'?: Inset
  'inset-lg'?: Inset
  'inset-xl'?: Inset

  'top'?: Top
  'top-hover'?: Top
  'top-focus'?: Top
  'top-hocus'?: Top
  'top-sm'?: Top
  'top-md'?: Top
  'top-lg'?: Top
  'top-xl'?: Top

  'bottom'?: Bottom
  'bottom-hover'?: Bottom
  'bottom-focus'?: Bottom
  'bottom-hocus'?: Bottom
  'bottom-sm'?: Bottom
  'bottom-md'?: Bottom
  'bottom-lg'?: Bottom
  'bottom-xl'?: Bottom

  'left'?: Left
  'left-hover'?: Left
  'left-focus'?: Left
  'left-hocus'?: Left
  'left-sm'?: Left
  'left-md'?: Left
  'left-lg'?: Left
  'left-xl'?: Left

  'right'?: Right
  'right-hover'?: Right
  'right-focus'?: Right
  'right-hocus'?: Right
  'right-sm'?: Right
  'right-md'?: Right
  'right-lg'?: Right
  'right-xl'?: Right

  'relative'?: Relative
  'relative-hover'?: Relative
  'relative-focus'?: Relative
  'relative-hocus'?: Relative
  'relative-sm'?: Relative
  'relative-md'?: Relative
  'relative-lg'?: Relative
  'relative-xl'?: Relative

  'static'?: Static
  'static-hover'?: Static
  'static-focus'?: Static
  'static-hocus'?: Static
  'static-sm'?: Static
  'static-md'?: Static
  'static-lg'?: Static
  'static-xl'?: Static

  // Z-Index
  'z'?: Z
  'z-hover'?: Z
  'z-focus'?: Z
  'z-hocus'?: Z
  'z-sm'?: Z
  'z-md'?: Z
  'z-lg'?: Z
  'z-xl'?: Z

  // Typography
  'align'?: Align
  'align-hover'?: Align
  'align-focus'?: Align
  'align-hocus'?: Align
  'align-sm'?: Align
  'align-md'?: Align
  'align-lg'?: Align
  'align-xl'?: Align

  'break'?: Break
  'break-hover'?: Break
  'break-focus'?: Break
  'break-hocus'?: Break
  'break-sm'?: Break
  'break-md'?: Break
  'break-lg'?: Break
  'break-xl'?: Break

  'capitalize'?: Capitalize
  'capitalize-hover'?: Capitalize
  'capitalize-focus'?: Capitalize
  'capitalize-hocus'?: Capitalize
  'capitalize-sm'?: Capitalize
  'capitalize-md'?: Capitalize
  'capitalize-lg'?: Capitalize
  'capitalize-xl'?: Capitalize

  'font'?: Font
  'font-hover'?: Font
  'font-focus'?: Font
  'font-hocus'?: Font
  'font-sm'?: Font
  'font-md'?: Font
  'font-lg'?: Font
  'font-xl'?: Font

  'italic'?: Italic
  'italic-hover'?: Italic
  'italic-focus'?: Italic
  'italic-hocus'?: Italic
  'italic-sm'?: Italic
  'italic-md'?: Italic
  'italic-lg'?: Italic
  'italic-xl'?: Italic

  'text'?: Text
  'text-hover'?: Text
  'text-focus'?: Text
  'text-hocus'?: Text
  'text-sm'?: Text
  'text-md'?: Text
  'text-lg'?: Text
  'text-xl'?: Text

  'tracking'?: Tracking
  'tracking-hover'?: Tracking
  'tracking-focus'?: Tracking
  'tracking-hocus'?: Tracking
  'tracking-sm'?: Tracking
  'tracking-md'?: Tracking
  'tracking-lg'?: Tracking
  'tracking-xl'?: Tracking

  'leading'?: Leading
  'leading-hover'?: Leading
  'leading-focus'?: Leading
  'leading-hocus'?: Leading
  'leading-sm'?: Leading
  'leading-md'?: Leading
  'leading-lg'?: Leading
  'leading-xl'?: Leading

  'lineThrough'?: LineThrough
  'lineThrough-hover'?: LineThrough
  'lineThrough-focus'?: LineThrough
  'lineThrough-hocus'?: LineThrough
  'lineThrough-sm'?: LineThrough
  'lineThrough-md'?: LineThrough
  'lineThrough-lg'?: LineThrough
  'lineThrough-xl'?: LineThrough

  'lowercase'?: Lowercase
  'lowercase-hover'?: Lowercase
  'lowercase-focus'?: Lowercase
  'lowercase-hocus'?: Lowercase
  'lowercase-sm'?: Lowercase
  'lowercase-md'?: Lowercase
  'lowercase-lg'?: Lowercase
  'lowercase-xl'?: Lowercase

  'normalCase'?: NormalCase
  'normalCase-hover'?: NormalCase
  'normalCase-focus'?: NormalCase
  'normalCase-hocus'?: NormalCase
  'normalCase-sm'?: NormalCase
  'normalCase-md'?: NormalCase
  'normalCase-lg'?: NormalCase
  'normalCase-xl'?: NormalCase

  'noUnderline'?: NoUnderline
  'noUnderline-hover'?: NoUnderline
  'noUnderline-focus'?: NoUnderline
  'noUnderline-hocus'?: NoUnderline
  'noUnderline-sm'?: NoUnderline
  'noUnderline-md'?: NoUnderline
  'noUnderline-lg'?: NoUnderline
  'noUnderline-xl'?: NoUnderline

  'notItalic'?: NotItalic
  'notItalic-hover'?: NotItalic
  'notItalic-focus'?: NotItalic
  'notItalic-hocus'?: NotItalic
  'notItalic-sm'?: NotItalic
  'notItalic-md'?: NotItalic
  'notItalic-lg'?: NotItalic
  'notItalic-xl'?: NotItalic

  'truncate'?: Truncate
  'truncate-hover'?: Truncate
  'truncate-focus'?: Truncate
  'truncate-hocus'?: Truncate
  'truncate-sm'?: Truncate
  'truncate-md'?: Truncate
  'truncate-lg'?: Truncate
  'truncate-xl'?: Truncate

  'underline'?: Underline
  'underline-hover'?: Underline
  'underline-focus'?: Underline
  'underline-hocus'?: Underline
  'underline-sm'?: Underline
  'underline-md'?: Underline
  'underline-lg'?: Underline
  'underline-xl'?: Underline

  'uppercase'?: Uppercase
  'uppercase-hover'?: Uppercase
  'uppercase-focus'?: Uppercase
  'uppercase-hocus'?: Uppercase
  'uppercase-sm'?: Uppercase
  'uppercase-md'?: Uppercase
  'uppercase-lg'?: Uppercase
  'uppercase-xl'?: Uppercase

  'whitespace'?: Whitespace
  'whitespace-hover'?: Whitespace
  'whitespace-focus'?: Whitespace
  'whitespace-hocus'?: Whitespace
  'whitespace-sm'?: Whitespace
  'whitespace-md'?: Whitespace
  'whitespace-lg'?: Whitespace
  'whitespace-xl'?: Whitespace

  // Backgrounds
  'bg'?: Bg
  'bg-hover'?: Bg
  'bg-focus'?: Bg
  'bg-hocus'?: Bg
  'bg-sm'?: Bg
  'bg-md'?: Bg
  'bg-lg'?: Bg
  'bg-xl'?: Bg

  // Borders
  'border'?: Border
  'border-hover'?: Border
  'border-focus'?: Border
  'border-hocus'?: Border
  'border-sm'?: Border
  'border-md'?: Border
  'border-lg'?: Border
  'border-xl'?: Border

  'borderB'?: BorderSide
  'borderB-hover'?: BorderSide
  'borderB-focus'?: BorderSide
  'borderB-hocus'?: BorderSide
  'borderB-sm'?: BorderSide
  'borderB-md'?: BorderSide
  'borderB-lg'?: BorderSide
  'borderB-xl'?: BorderSide

  'borderL'?: BorderSide
  'borderL-hover'?: BorderSide
  'borderL-focus'?: BorderSide
  'borderL-hocus'?: BorderSide
  'borderL-sm'?: BorderSide
  'borderL-md'?: BorderSide
  'borderL-lg'?: BorderSide
  'borderL-xl'?: BorderSide

  'borderR'?: BorderSide
  'borderR-hover'?: BorderSide
  'borderR-focus'?: BorderSide
  'borderR-hocus'?: BorderSide
  'borderR-sm'?: BorderSide
  'borderR-md'?: BorderSide
  'borderR-lg'?: BorderSide
  'borderR-xl'?: BorderSide

  'borderT'?: BorderSide
  'borderT-hover'?: BorderSide
  'borderT-focus'?: BorderSide
  'borderT-hocus'?: BorderSide
  'borderT-sm'?: BorderSide
  'borderT-md'?: BorderSide
  'borderT-lg'?: BorderSide
  'borderT-xl'?: BorderSide

  'rounded'?: Rounded
  'rounded-hover'?: Rounded
  'rounded-focus'?: Rounded
  'rounded-hocus'?: Rounded
  'rounded-sm'?: Rounded
  'rounded-md'?: Rounded
  'rounded-lg'?: Rounded
  'rounded-xl'?: Rounded

  'roundedB'?: Rounded
  'roundedB-hover'?: Rounded
  'roundedB-focus'?: Rounded
  'roundedB-hocus'?: Rounded
  'roundedB-sm'?: Rounded
  'roundedB-md'?: Rounded
  'roundedB-lg'?: Rounded
  'roundedB-xl'?: Rounded

  'roundedBl'?: Rounded
  'roundedBl-hover'?: Rounded
  'roundedBl-focus'?: Rounded
  'roundedBl-hocus'?: Rounded
  'roundedBl-sm'?: Rounded
  'roundedBl-md'?: Rounded
  'roundedBl-lg'?: Rounded
  'roundedBl-xl'?: Rounded

  'roundedBr'?: Rounded
  'roundedBr-hover'?: Rounded
  'roundedBr-focus'?: Rounded
  'roundedBr-hocus'?: Rounded
  'roundedBr-sm'?: Rounded
  'roundedBr-md'?: Rounded
  'roundedBr-lg'?: Rounded
  'roundedBr-xl'?: Rounded

  'roundedL'?: Rounded
  'roundedL-hover'?: Rounded
  'roundedL-focus'?: Rounded
  'roundedL-hocus'?: Rounded
  'roundedL-sm'?: Rounded
  'roundedL-md'?: Rounded
  'roundedL-lg'?: Rounded
  'roundedL-xl'?: Rounded

  'roundedR'?: Rounded
  'roundedR-hover'?: Rounded
  'roundedR-focus'?: Rounded
  'roundedR-hocus'?: Rounded
  'roundedR-sm'?: Rounded
  'roundedR-md'?: Rounded
  'roundedR-lg'?: Rounded
  'roundedR-xl'?: Rounded

  'roundedT'?: Rounded
  'roundedT-hover'?: Rounded
  'roundedT-focus'?: Rounded
  'roundedT-hocus'?: Rounded
  'roundedT-sm'?: Rounded
  'roundedT-md'?: Rounded
  'roundedT-lg'?: Rounded
  'roundedT-xl'?: Rounded

  'roundedTl'?: Rounded
  'roundedTl-hover'?: Rounded
  'roundedTl-focus'?: Rounded
  'roundedTl-hocus'?: Rounded
  'roundedTl-sm'?: Rounded
  'roundedTl-md'?: Rounded
  'roundedTl-lg'?: Rounded
  'roundedTl-xl'?: Rounded

  'roundedTr'?: Rounded
  'roundedTr-hover'?: Rounded
  'roundedTr-focus'?: Rounded
  'roundedTr-hocus'?: Rounded
  'roundedTr-sm'?: Rounded
  'roundedTr-md'?: Rounded
  'roundedTr-lg'?: Rounded
  'roundedTr-xl'?: Rounded

  // Flex
  'content'?: Content
  'content-hover'?: Content
  'content-focus'?: Content
  'content-hocus'?: Content
  'content-sm'?: Content
  'content-md'?: Content
  'content-lg'?: Content
  'content-xl'?: Content

  'flex'?: Flex
  'flex-hover'?: Flex
  'flex-focus'?: Flex
  'flex-hocus'?: Flex
  'flex-sm'?: Flex
  'flex-md'?: Flex
  'flex-lg'?: Flex
  'flex-xl'?: Flex

  'inlineFlex'?: InlineFlex
  'inlineFlex-hover'?: InlineFlex
  'inlineFlex-focus'?: InlineFlex
  'inlineFlex-hocus'?: InlineFlex
  'inlineFlex-sm'?: InlineFlex
  'inlineFlex-md'?: InlineFlex
  'inlineFlex-lg'?: InlineFlex
  'inlineFlex-xl'?: InlineFlex

  'items'?: Items
  'items-hover'?: Items
  'items-focus'?: Items
  'items-hocus'?: Items
  'items-sm'?: Items
  'items-md'?: Items
  'items-lg'?: Items
  'items-xl'?: Items

  'self'?: Self
  'self-hover'?: Self
  'self-focus'?: Self
  'self-hocus'?: Self
  'self-sm'?: Self
  'self-md'?: Self
  'self-lg'?: Self
  'self-xl'?: Self

  'justify'?: Justify
  'justify-hover'?: Justify
  'justify-focus'?: Justify
  'justify-hocus'?: Justify
  'justify-sm'?: Justify
  'justify-md'?: Justify
  'justify-lg'?: Justify
  'justify-xl'?: Justify

  // Spacing
  'm'?: M
  'm-hover'?: M
  'm-focus'?: M
  'm-hocus'?: M
  'm-sm'?: M
  'm-md'?: M
  'm-lg'?: M
  'm-xl'?: M

  'nm'?: Nm
  'nm-hover'?: Nm
  'nm-focus'?: Nm
  'nm-hocus'?: Nm
  'nm-sm'?: Nm
  'nm-md'?: Nm
  'nm-lg'?: Nm
  'nm-xl'?: Nm // TODO: Check negative margins

  'p'?: P
  'p-hover'?: P
  'p-focus'?: P
  'p-hocus'?: P
  'p-sm'?: P
  'p-md'?: P
  'p-lg'?: P
  'p-xl'?: P

  // Sizing
  'h'?: H
  'h-hover'?: H
  'h-focus'?: H
  'h-hocus'?: H
  'h-sm'?: H
  'h-md'?: H
  'h-lg'?: H
  'h-xl'?: H

  'maxH'?: MaxH
  'maxH-hover'?: MaxH
  'maxH-focus'?: MaxH
  'maxH-hocus'?: MaxH
  'maxH-sm'?: MaxH
  'maxH-md'?: MaxH
  'maxH-lg'?: MaxH
  'maxH-xl'?: MaxH

  'minH'?: MinH
  'minH-hover'?: MinH
  'minH-focus'?: MinH
  'minH-hocus'?: MinH
  'minH-sm'?: MinH
  'minH-md'?: MinH
  'minH-lg'?: MinH
  'minH-xl'?: MinH

  'maxW'?: MaxW
  'maxW-hover'?: MaxW
  'maxW-focus'?: MaxW
  'maxW-hocus'?: MaxW
  'maxW-sm'?: MaxW
  'maxW-md'?: MaxW
  'maxW-lg'?: MaxW
  'maxW-xl'?: MaxW

  'minW'?: MinW
  'minW-hover'?: MinW
  'minW-focus'?: MinW
  'minW-hocus'?: MinW
  'minW-sm'?: MinW
  'minW-md'?: MinW
  'minW-lg'?: MinW
  'minW-xl'?: MinW

  'w'?: W
  'w-hover'?: W
  'w-focus'?: W
  'w-hocus'?: W
  'w-sm'?: W
  'w-md'?: W
  'w-lg'?: W
  'w-xl'?: W

  // Misc
  'container'?: Container
  'container-hover'?: Container
  'container-focus'?: Container
  'container-hocus'?: Container
  'container-sm'?: Container
  'container-md'?: Container
  'container-lg'?: Container
  'container-xl'?: Container

  'opacity'?: Opacity
  'opacity-hover'?: Opacity
  'opacity-focus'?: Opacity
  'opacity-hocus'?: Opacity
  'opacity-sm'?: Opacity
  'opacity-md'?: Opacity
  'opacity-lg'?: Opacity
  'opacity-xl'?: Opacity

  'shadow'?: Shadow
  'shadow-hover'?: Shadow
  'shadow-focus'?: Shadow
  'shadow-hocus'?: Shadow
  'shadow-sm'?: Shadow
  'shadow-md'?: Shadow
  'shadow-lg'?: Shadow
  'shadow-xl'?: Shadow

  'list'?: List
  'list-hover'?: List
  'list-focus'?: List
  'list-hocus'?: List
  'list-sm'?: List
  'list-md'?: List
  'list-lg'?: List
  'list-xl'?: List

  'outline'?: Outline
  'outline-hover'?: Outline
  'outline-focus'?: Outline
  'outline-hocus'?: Outline
  'outline-sm'?: Outline
  'outline-md'?: Outline
  'outline-lg'?: Outline
  'outline-xl'?: Outline

  'appearance'?: Appearance
  'appearance-hover'?: Appearance
  'appearance-focus'?: Appearance
  'appearance-hocus'?: Appearance
  'appearance-sm'?: Appearance
  'appearance-md'?: Appearance
  'appearance-lg'?: Appearance
  'appearance-xl'?: Appearance

  'select'?: Select
  'select-hover'?: Select
  'select-focus'?: Select
  'select-hocus'?: Select
  'select-sm'?: Select
  'select-md'?: Select
  'select-lg'?: Select
  'select-xl'?: Select

  'pointerEvents'?: PointerEvents
  'pointerEvents-hover'?: PointerEvents
  'pointerEvents-focus'?: PointerEvents
  'pointerEvents-hocus'?: PointerEvents
  'pointerEvents-sm'?: PointerEvents
  'pointerEvents-md'?: PointerEvents
  'pointerEvents-lg'?: PointerEvents
  'pointerEvents-xl'?: PointerEvents

  'fill'?: Fill
  'fill-hover'?: Fill
  'fill-focus'?: Fill
  'fill-hocus'?: Fill
  'fill-sm'?: Fill
  'fill-md'?: Fill
  'fill-lg'?: Fill
  'fill-xl'?: Fill

  'cursor'?: Cursor
  'cursor-hover'?: Cursor
  'cursor-focus'?: Cursor
  'cursor-hocus'?: Cursor
  'cursor-sm'?: Cursor
  'cursor-md'?: Cursor
  'cursor-lg'?: Cursor
  'cursor-xl'?: Cursor

  // Plugins
  'visuallyHidden'?: VisuallyHidden
  'visuallyHidden-hover'?: VisuallyHidden
  'visuallyHidden-focus'?: VisuallyHidden
  'visuallyHidden-hocus'?: VisuallyHidden
  'visuallyHidden-sm'?: VisuallyHidden
  'visuallyHidden-md'?: VisuallyHidden
  'visuallyHidden-lg'?: VisuallyHidden
  'visuallyHidden-xl'?: VisuallyHidden

  'visuallyHiddenFocusable'?: VisuallyHidden
  'visuallyHiddenFocusable-hover'?: VisuallyHidden
  'visuallyHiddenFocusable-focus'?: VisuallyHidden
  'visuallyHiddenFocusable-hocus'?: VisuallyHidden
  'visuallyHiddenFocusable-sm'?: VisuallyHidden
  'visuallyHiddenFocusable-md'?: VisuallyHidden
  'visuallyHiddenFocusable-lg'?: VisuallyHidden
  'visuallyHiddenFocusable-xl'?: VisuallyHidden

  // Helper
  'focusable'?: Focusable
  'focusable-hover'?: Focusable
  'focusable-focus'?: Focusable
  'focusable-hocus'?: Focusable
  'focusable-sm'?: Focusable
  'focusable-md'?: Focusable
  'focusable-lg'?: Focusable
  'focusable-xl'?: Focusable
}
