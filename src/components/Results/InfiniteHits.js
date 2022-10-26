import React from 'react'
import styled from 'styled-components'
import { connectInfiniteHits } from 'react-instantsearch-dom'
// import ReactJson from 'react-json-view'
import { MeiliSearch as Meilisearch } from 'meilisearch'
import clientAgents from 'version/client-agents'

import Button from 'components/Button'
// import Card from 'components/Card'
import ScrollToTop from 'components/ScrollToTop'

import useLocalStorage from '../../hooks/useLocalStorage'

import Hit from './Hit'

const HitsList = styled.ul`
  padding: 0;
  margin: 0;
  > li + li {
    margin-top: 16px;
  }
`
const baseUrl =
  process.env.REACT_APP_MEILI_SERVER_ADDRESS ||
  (process.env.NODE_ENV === 'development'
    ? 'http://0.0.0.0:7700'
    : window.location.origin)

const testImage = async (elem) => {
  // Test the standard way with regex and image extensions
  if (
    typeof elem === 'string' &&
    elem.match(/^(https|http):\/\/.*(jpe?g|png|gif|webp)(\?.*)?$/g)
  )
    return true
  // Test by trying to load the image
  return new Promise((resolve) => {
    const img = new Image()
    img.src = elem
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
  })
}

const findImageKey = async (array) => {
  const promises = array.map(async (elem) => testImage(elem[1]))
  const results = await Promise.all(promises)
  const index = results.findIndex((result) => result)
  const imageField = array[index]
  return imageField?.[0]
}

const InfiniteHits = connectInfiniteHits(
  ({ currentIndex, hits, hasMore, refineNext }) => {
    const [imageKey, setImageKey] = React.useState(false)
    // eslint-disable-next-line no-unused-vars
    const [apiKey, setApiKey] = useLocalStorage('apiKey')
    // eslint-disable-next-line no-unused-vars
    const [MSClient, setMSClient] = React.useState('')
    React.useEffect(async () => {
      setImageKey(hits[0] ? await findImageKey(Object.entries(hits[0])) : null)
    }, [hits[0]])
    React.useEffect(async () => {
      const cl = await new Meilisearch({
        host: baseUrl,
        apiKey,
        clientAgents,
      })
      setMSClient(cl)
    }, [])

    // ({ hits, hasMore, refineNext, mode }) => {
    return (
      <div>
        {/* {mode === 'fancy' ? ( */}
        <h3>Here is the list {currentIndex} </h3>
        <HitsList>
          {hits.map((hit, index) => (
            <Hit
              key={index}
              idx={currentIndex}
              hit={hit}
              imageKey={imageKey}
              client={MSClient}
            />
          ))}
        </HitsList>
        {/* ) : (
        <Card style={{ fontSize: 14, minHeight: 320 }}>
          <ReactJson
            src={hits}
            name={null}
            collapsed={2}
            enableClipboard={false}
            displayObjectSize={false}
            displayDataTypes={false}
            theme={jsonTheme}
          />
        </Card>
      )} */}
        {hasMore && (
          <Button
            size="small"
            variant="bordered"
            onClick={refineNext}
            style={{ margin: '0 auto', marginTop: 32 }}
          >
            Load more
          </Button>
        )}
        <ScrollToTop />
      </div>
    )
  }
)

export default InfiniteHits
