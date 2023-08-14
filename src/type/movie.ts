export type Movies = Movie[]

export interface MoviesResponse {
  Search: Movies
  totalResults: string
  Response: string
  Error?: string
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface SearchMovie {
  title: string
  page?: number
}

export interface MovieResponse {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
  Error: string
}

export interface MovieProps {
  imdbID: string
  Year: string
  Poster: string
  Title: string
}
