import { useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/constants'

const Home = () => {
  const [stories, setStories] = useState<Array<StoryType>>([])

  const fetchLatestStories = async () => {
    const response = await fetch(`${BASE_API_URL}tags=front_page`)
    const stories = await response.json()
    setStories(stories)
  }

  useEffect(() => {
    fetchLatestStories()

    return () => {
      setStories([])
    }
  }, [])

  return (
    <div>
      <div className="container mx-auto px-28 py-4">
        {/* SearchBard */}
        <div className="w-full">
          <input
            className="border-2 border-primary rounded px-4 py-2 w-full shadow"
            type="text"
            name="query"
            id="query"
            placeholder="Search"
          />
        </div>
        <div>
          {stories && stories.length > 0 ? (
            stories.map((story, index) => <div key={index}>{story.title}</div>)
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
