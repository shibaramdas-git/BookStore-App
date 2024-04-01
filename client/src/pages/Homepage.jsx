import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";

export const Homepage = () => {
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getData() {
    try {
        setLoading(true);
        const data = (await axios.get("http://localhost:5000/books")).data.data;
        setBooks(data);
        setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  })();
  }, []);
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      {loading && <Loading />}
      <div className="">
        <h1 className="text-3xl text-center">All Books list</h1>
        <div className="text-right">
        <Link to="/books/create">
          <button className="border border-black">Add books</button>
        </Link>
        </div>
      </div>
      {books && (
        <table>
          <thead className="p-2">
            <tr className="border border-gray-700 rounded-lg text-center">
              <th>No.</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Published Year</th>
              <th>ISBN</th>
              <th>Methods</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
          <tbody>
            {books.map((book, i) => {
              return ( 
              <tr key={book._id} className="h-6">
              <td className="border border-gray-700 rounded-lg text-center p-2">
                {i + 1}
              </td>
              <td className="border border-gray-700 rounded-lg text-center p-2">{book.title}</td>
              <td className="border border-gray-700 rounded-lg text-center p-2">{book.author}</td>
              <td className="border border-gray-700 rounded-lg text-center p-2">{book.publishYear}</td>
              <td className="border border-gray-700 rounded-lg text-center p-2">{book.isbn}</td>
              <td className="border border-gray-700 rounded-lg text-center p-2">
                <div className="flex justify-evenly ">
                  <Link to={`/books/details/${book._id}`}>View</Link>
                  <Link to={`/books/update/${book._id}`}>Edit</Link>
                  <Link to={`/books/delete/${book._id}`}>Delete</Link>
                </div>
              </td>
            </tr>)
            } 
            )}
          </tbody>
        </table>
      )}
    </div>
  )
} 
