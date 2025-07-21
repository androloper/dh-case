import { useFetch } from "nuxt/app"

const baseUrl = 'https://dhcase-mockapi.vercel.app/api/game/578080'

export const useApi = () => {
  const getOverview = () => useFetch(`${baseUrl}/overview`)
  const getPerformance = () => useFetch(`${baseUrl}/performance`)
  const getStream = () => useFetch(`${baseUrl}/stream`)

  return {
    getOverview,
    getPerformance,
    getStream
  }
}