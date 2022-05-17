import { useEffect, useState } from 'react'
import { Loader, SearchCard, StoryCard } from '../components'
import { BASE_API_SEARCH_URL } from '../utils/constants'
import { StoryType } from '../utils/types'

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [stories, setStories] = useState<Array<StoryType>>([])

  const fetchLatestStories = async () => {
    setLoading(true)
    const response = await fetch(`${BASE_API_SEARCH_URL}tags=front_page`)
    const { hits } = await response.json()
    setStories(hits)
    setLoading(false)
  }

  useEffect(() => {
    fetchLatestStories()
  }, [])

  return (
    <div>
      <div className="container mx-auto max-w-3xl p-4">
        {/* SearchBard */}
        <SearchCard />
        <div className="flex flex-col space-y-1">
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
