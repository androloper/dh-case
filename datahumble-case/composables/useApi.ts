import { useFetch } from "nuxt/app"

export const useApi = () => {
  const getOverview = () => useFetch('/api/game/578080/overview')
  const getPerformance = () => useFetch('/api/game/578080/performance')
  const getStream = () => useFetch('/api/game/578080/stream')

  return {
    getOverview,
    getPerformance,
    getStream
  }
}