import Link from 'next/link'

const BookItem = ({book}) => {
  return (
    <Link href="/book/[id]" as={`/book/${book.id}`}>
      <a className="">
        <h3>{book.title}</h3>
        <p>{book.body}</p>
      </a>
    </Link>
  )
}

export default BookItem