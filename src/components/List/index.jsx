/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Item } from '..'

const List = ({ data }) => {
  return (
    <ul css={style}>
      {data.map(({ code, addr, name, remain_stat, stock_at }) => (
        <Item key={code} data={{ addr, name, remain_stat, stock_at }} />
      ))}
    </ul>
  )
}

const style = css`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem;
  list-style: none;
  overflow-y: scroll;
  scrollbar-width: none; /* firefox */
  &::-webkit-scrollbar {
    display: none;
  } /* chrome */
  @media screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-height: 401px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default List
