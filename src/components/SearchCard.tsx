import { debounce } from 'lodash'
import React, { FC, ReactElement, useCallback, useState } from 'react'
import { SearchCardProps } from '../utils/types'

const SearchCard: FC<SearchCardProps> = ({ processInput }): ReactElement => {
  const [query, setQuery] = useState<string>('')

  const delayedQuery = useCallback(
    debounce((q: string) => processInput(q), 500),
    []
  )

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery(event.target.value)
    delayedQuery(event.target.value)
  }

  const handleEnterKey = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      processInput(query)
    }
  }

  return (
    <div className="w-full mb-6 flex">
      <input
        className="rounded-l px-4 py-2 flex-grow shadow"
        type="text"
        name="query"
        autoComplete="off"
        id="query"
        value={query}
        onKeyDown={handleEnterKey}
        onChange={handleInputChange}
        placeholder="Search"
      />
    </div>
  )
}

export default SearchCard
