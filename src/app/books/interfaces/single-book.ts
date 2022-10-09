export interface SingleBook {

  error:string,
  title: string,
  subtitle: string,
  authors: string,
  publisher: string,
  isbn10: string,
  isbn13: string,
  pages: string,
  year: string,
  rating: string,
  desc: string,
  image: string,
  url: string,
  pdf: {
            Chapter2: string,
            Chapter5: string,
         }

}
