import React, { FC, ReactElement } from 'react'

const SearchCard: FC = (): ReactElement => {
  return (
    <div className="w-full mb-6">
      <input
        className="rounded px-4 py-2 w-full shadow"
        type="text"
        name="query"
        autoComplete="off"
        id="query"
        placeholder="Search"
      />
    </div>
  )
}

export default SearchCard
