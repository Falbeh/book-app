import BookItem from './BookItem'

const BookList = ({books}) => {
  return (
    <>
        <div>Book List</div>
        {books.map(book => <BookItem key={book.id} book={book}/>)}
    </>
  )
}

export default BookList