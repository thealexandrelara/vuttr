import styled from 'styled-components'
import { Checkbox as AntCheckbox } from 'antd'

import SearchTextInput from '../../../../components/SearchTextInput'

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }

`

export const SearchInput = styled(SearchTextInput)`
  @media only screen and (max-width: 600px) {
    margin-bottom: 8px;
  }
`

export const Checkbox = styled(AntCheckbox)`
  
`
