import { purgeFromTailwindReact } from '.'

describe('purgeFromTailwindReact', () => {
  it('detects string value props', () => {
    const content = '<Base bg="red" />'

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(['bg-red'])
  })

  it('detects boolean value props', () => {
    const content = '<Base flex />'

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(['flex'])
  })

  it('detects object value props', () => {
    const content = '<Base p={{ x: 4, y: 2 }} />'

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(['px-4', 'py-2'])
  })

  it('detects array value props', () => {
    const content = '<Base flex={[ true, "col", "wrap" ]} />'

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(
      expect.arrayContaining(['flex', 'flex-col', 'flex-wrap']),
    )
  })

  it('detects conditional value props', () => {
    const content =
      '<Base bg={active ? "red" : "grey" } flex={active || "col" } />'

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(
      expect.arrayContaining(['bg-red', 'bg-grey', 'flex', 'flex-col']),
    )
  })

  it('detects standard className values', () => {
    const content = '<Base className="inline-block" />'

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(['inline-block'])
  })

  it('applies variant prefixes', () => {
    const content = `
    <>
      <Base flex justify="center">
        <Base
          flex
          justify="center"
          items="center"
          bg="purple-400"
          bg-sm="green-400"
          bg-md="blue-400"
          bg-lg="red-400"
          bg-xl="orange-400"
          text="white"
          text-md="yellow-400"
          rounded="full"
          shadow-hover="lg"
          w={24}
          h={24}
        >
          Tailwind
        </Base>
      </Base>
    </>
    `
    const expectedClasses = [
      'md:text-yellow-400',
      'sm:bg-green-400',
      'md:bg-blue-400',
      'lg:bg-red-400',
      'xl:bg-orange-400',
      'hover:w-lg',
      'hover:shadow-lg',
    ]

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(expect.arrayContaining(expectedClasses))
  })

  it('finds custom Flex classes from source code', () => {
    const content = `
      const Flex = ({
        as = 'div',
        children,
        inline = false,
        inlineFlex = false,
        col = false,
        reverse = false,
        wrap = false,
        wrapReverse = false,
        ...rest
      }: FlexProps) => {
        const el = as === 'div' && (inline || inlineFlex) ? 'span' : as

        return (
          <Box
            as={el}
            flex={
              [
                true,
                col && !reverse && 'col',
                reverse && (col ? 'col-reverse' : 'row-reverse'),
                wrap && 'wrap',
                wrapReverse && 'wrap-reverse',
              ].filter(Boolean) as FlexValue[]
            }
            inlineFlex={inline || inlineFlex}
            {...rest}
          >
            {children}
          </Box>
        )
      }
    `

    const expectedClasses = [
      'flex',
      'flex-col',
      'flex-col-reverse',
      'flex-row-reverse',
      'flex-wrap',
      'flex-wrap-reverse',
      'inline-flex',
    ]

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(expect.arrayContaining(expectedClasses))
  })

  it('finds custom Text classes from user code', () => {
    const content = `
      const Fixture = () => (<>
        <Text as="h3" size="3xl" bold leading="tight">
          Lorem Ipsum
        </Text>
        <Text>
          <Text as="span" color="purple-500" size="lg">
            Lorem ipsum dolor sit amet
          </Text>
          , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. <Text as="span" bold>
            Ut enim ad minim veniam
          </Text>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. <Text as="span" italic weight="light">
            Excepteur sint occaecat cupidatat non proident
          </Text>, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </>)
    `
    const expectedClasses = [
      'text-3xl',
      'text-lg',
      'text-purple-500',
      'font-bold',
      'font-light',
      'italic',
      'leading-tight',
    ]

    const classes = purgeFromTailwindReact(content)

    expect(classes).toEqual(expect.arrayContaining(expectedClasses))
  })
})
