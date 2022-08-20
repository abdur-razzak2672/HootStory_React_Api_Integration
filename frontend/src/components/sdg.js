import React from 'react';
 
type Book = {
  title: string,
  description: string
}
 
type BookInfo = {
 
  id: number,
  count: number
}
 
export const BookComponent = () => {
const [books, setBooks] = useState<Book>([]);
const [info, setInfo] = useState<BookInfo>({id: 1, count: 0});
 
const getBooks = async () => {
    const {count, data} = await getBookApi(api);
    setInfo({...info, count: count});
    setBooks(data);
} 
 
useEffect( () => {
   getBooks()
}, [info.id] );
 
return (
)
}