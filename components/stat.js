import { Box, Flex, Text } from 'theme-ui'
import { isEmpty } from 'lodash'

const Stat = ({
  value,
  label,
  unit = '$',
  color = 'inherit',
  of,
  reversed = false,
  lg = false,
  half = false,
  ...props
}) => (
  <Flex
    {...props}
    sx={{
      flexDirection: reversed ? 'column-reverse' : 'column',
      gridColumn: lg ? ['initial', 'span 1'] : 'initial',
      lineHeight: 1,
      ...props.sx
    }}
  >
    <Flex
      sx={{
        flexDirection: unit === '%' ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        justifyContent: unit === '%' ? 'flex-end' : 'flex-start',
        mb: 2,
        position: 'relative'
      }}
    >
      {!isEmpty(unit) && (
        <Text
          as="sup"
          sx={{
            fontSize: lg ? [2, 3] : [1, 2],
            color: color === 'text' ? 'secondary' : color,
            position: [null, null, unit === '%' ? null : 'absolute'],
            left: [null, null, -3],
            ml: [null, unit === '%' ? 1 : null],
            mr: [null, 1],
            pt: [null, 1]
          }}
          children={unit}
        />
      )}
      <Text
        as="span"
        sx={{
          color,
          fontSize: lg ? [4, 5] : half ? 3 : 4,
          fontWeight: 'stat',
          my: 0
        }}
        children={value}
      />
      {!isEmpty(of) && (
        <Text
          as="sup"
          sx={{
            fontSize: lg ? [2, 3] : [1, 2],
            ml: [null, 1],
            pt: [null, 1],
            '::before': {
              content: '"/"'
            }
          }}
          children={of}
        />
      )}
    </Flex>
    {!isEmpty(label) && (
      <Text
        as="span"
        variant="caption"
        sx={{
          color: 'inherit',
          fontSize: [0, 1],
          textTransform: 'uppercase'
        }}
        children={label}
      />
    )}
  </Flex>
)

export default Stat
