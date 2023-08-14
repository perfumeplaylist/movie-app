import { defineStore } from 'pinia'
import { MovieResponse } from '../type/movie.ts'
import axios, { AxiosResponse } from 'axios'

export const useDetailMoive = defineStore('movie', {
  state: () => ({
    movieInfo: {} as MovieResponse,
    loading: false
  }),
  actions: {
    async searchDetailMovie(id: string) {
      if (this.loading) return
      this.loading = true
      try {
        const { data }: AxiosResponse<MovieResponse> = await axios.get(
          '/api/movie',
          {
            params: { i: id, plot: 'full' }
          }
        )
        if (data.Error) {
          this.movieInfo = {} as MovieResponse
          return
        }
        this.movieInfo = data
        this.loading = false
      } catch (error) {
        console.error('fetchMovie:', error)
      }
    }
  }
})
