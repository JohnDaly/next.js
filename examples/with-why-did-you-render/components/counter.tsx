import { memo } from 'react'

type Props = {
  counterState: {
    count: number
  }
}

const Counter = ({ counterState }: Props) => {
  return <div>The current count is: {counterState.count} </div>
}

export default memo(Counter)
