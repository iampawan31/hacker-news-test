import { useEffect, useState } from 'react'
import { Loader, SearchCard, StoryCard } from '../components'
import { BASE_API_SEARCH_URL } from '../utils/constants'
import { StoryType } from '../utils/types'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [numberOfPages, setNumberOfPages] = useState<number>(0)
  const [hitsPerPage, setHitsPerPage] = useState<number>(0)
  const [stories, setStories] = useState<Array<StoryType>>([])
  const [searchParams, setSearchParams] = useSearchParams()

  const prevPage = async () => {
    if (currentPage === 0) return

    setLoading(true)
    const response = await fetch(
      `${BASE_API_SEARCH_URL}&page=${currentPage - 1}`
    )
    const { hits, page, nbPages, hitsPerPage } = await response.json()
    setStories(hits)
    setCurrentPage(page)
    setNumberOfPages(nbPages)
    setHitsPerPage(hitsPerPage)
    if (currentPage === 0) {
      setSearchParams({})
    } else {
      setSearchParams({ page: (currentPage - 1).toString() })
    }
    setLoading(false)
  }

  const nextPage = async () => {
    if (currentPage === numberOfPages) return

    setLoading(true)
    const response = await fetch(
      `${BASE_API_SEARCH_URL}&page=${currentPage + 1}`
    )
    const { hits, page, nbPages, hitsPerPage } = await response.json()
    setStories(hits)
    setCurrentPage(page)
    setNumberOfPages(nbPages)
    setHitsPerPage(hitsPerPage)
    setSearchParams({ page: (currentPage + 1).toString() })
    setLoading(false)
  }

  const fetchLatestStories = async (query: string = '') => {
    setLoading(true)

    const response = query
      ? await fetch(`${BASE_API_SEARCH_URL}query=${query}`)
      : await fetch(`${BASE_API_SEARCH_URL}tags=front_page`)
    const { hits, page, nbPages, hitsPerPage } = await response.json()
    setStories(hits)
    setCurrentPage(page)
    setNumberOfPages(nbPages)
    setHitsPerPage(hitsPerPage)
    setLoading(false)
  }

  useEffect(() => {
    fetchLatestStories()
  }, [])

  return (
    <div>
      <div className="container mx-auto max-w-3xl p-4">
        {/* SearchBard */}
        <SearchCard processInput={fetchLatestStories} />
        {/* Pagination Section */}
        <div className="flex justify-between my-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-white px-4 py-2 rounded shadow hover:bg-opacity-50 disabled:bg-gray disabled:cursor-not-allowed transition"
          >
            Prev
          </button>
          <button
            onClick={nextPage}
            className="bg-white px-4 py-2 rounded shadow hover:bg-opacity-50 disabled:bg-gray disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
        {/* Stories Section */}
        <div className="flex min-h-full flex-col space-y-1 mb-10">
          {loading ? (
            <Loader />
          ) : (
            stories.map((story) => (
              <StoryCard key={story.objectID} story={story} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
