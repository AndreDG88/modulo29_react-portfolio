import styled from 'styled-components'
import { Props } from './paragrafo-index'

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#2d3436' : '#636e72')};
  font-size: 14px;
  line-height: 22px;
`