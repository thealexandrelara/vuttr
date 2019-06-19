import React, { useState, useRef } from 'react'
import { StyledComponent } from 'styled-components'
// @ts-ignore
import { useDispatch } from 'react-redux'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import _debounce from 'lodash/debounce'

import { Container, SearchInput, Checkbox } from './styles'

import * as ToolsActions from '../../../../store/ducks/tools/actions'


function Search() {
  const dispatch = useDispatch()
  const searchInputRef = useRef<any>()
  const [searchInTagsOnly, setSearchInTagsOnly] = useState(false)


  const doSearch = _debounce((value, currentSearchTagsOnly?: boolean) => {
    const shouldSearchInTagsOnly = typeof currentSearchTagsOnly === 'boolean' ? currentSearchTagsOnly : searchInTagsOnly
    dispatch(ToolsActions.searchToolsRequest(value, shouldSearchInTagsOnly))
   }, 500)

  function handleSearch(e : React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    doSearch(value)
  }

  function handleCheckboxChange(e : CheckboxChangeEvent) {
    setSearchInTagsOnly(e.target.checked)
    doSearch(searchInputRef.current.value, e.target.checked)
  }

  return (
    <Container>
      <SearchInput searchInputRef={searchInputRef} placeholder="search" onChange={handleSearch} />
      <Checkbox style={{ marginLeft: 8 }} checked={searchInTagsOnly} onChange={handleCheckboxChange}>Search in tags only</Checkbox>
    </Container>
)
}

export default Search
