import { Movies, MoviesResponse, SearchMovie } from '../type/movie.ts'
import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'

export const useMovieStore = defineStore('movies', {
  state: () => ({
    loading: false,
    searchKeyword: '',
    movie: [] as Movies,
    currentPage: 1,
    totalMovieCount: 0,
    totalPage: 0
  }),
  getters: {
    getTotalPage(state) {
      return Math.ceil(state.totalMovieCount / 10)
    }
  },
  actions: {
    async searchMoive({ title, page = 1 }: SearchMovie) {
      if (this.loading) return
      this.loading = true
      try {
        const { data }: AxiosResponse<MoviesResponse> = await axios.get(
          '/api/movie',
          {
            params: { s: title, page }
          }
        )
        if (data.Error) {
          console.error('요청할수 없다')
          return
        }
        this.movie = data.Search
        this.searchKeyword = title
        this.totalMovieCount = Number(data.totalResults)
        this.currentPage = page
        this.totalPage = this.getTotalPage
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    }
  }
})
