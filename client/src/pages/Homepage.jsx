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
      <div className="w-full">
        <header>
          <div className="text-3xl text-center my-4 py-4 w-full border-b border-slate-300 shadow-lg bg-amber-200 font-bold">
            Welcome to BookStoreApp
          </div>
          <div className="p-4">
            <span className="text-lg">All Books list</span><span className="float-right"><Link to="/books/create">
              <button className="border border-zinc-700 bg-slate-50 rounded-md hover:bg-amber-100 px-4 py-1.5">Add books</button>
            </Link></span>
          </div>
        </header>
      </div>
      {books && (
        <div className="p-4 w-full">
        <table className="w-full" >
          <thead className="bg-slate-200">
            <tr className="">
              <th className="border border-gray-900 rounded-lg text-center p-2">No.</th>
              <th className="border border-gray-700 rounded-lg text-center p-2">Book Title</th>
              <th className="border border-gray-700 rounded-lg text-center p-2">Author</th>
              <th className="border border-gray-700 rounded-lg text-center p-2">Published Year</th>
              <th className="border border-gray-700 rounded-lg text-center p-2">ISBN</th>
              <th className="border border-gray-700 rounded-lg text-center p-2">Methods</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tbody>
            {books.map((book, i) => {
              return (
                <tr key={book._id} className="h-6">
                  <td className="border border-gray-700 rounded-lg text-center p-2">
                    {i + 1}
                  </td>
                  <td className="border border-gray-700 rounded-lg text-center p-2">
                    {book.title}
                  </td>
                  <td className="border border-gray-700 rounded-lg text-center p-2">
                    {book.author}
                  </td>
                  <td className="border border-gray-700 rounded-lg text-center p-2">
                    {book.publishYear}
                  </td>
                  <td className="border border-gray-700 rounded-lg text-center p-2">
                    {book.isbn}
                  </td>
                  <td className="border border-gray-700 rounded-lg text-center p-2">
                    <div className="flex justify-evenly ">
                      <Link to={`/books/details/${book._id}`} className="text-blue-500 hover:text-black"> View </Link>
                      &nbsp;
                      <Link to={`/books/update/${book._id}`} className="text-green-700 hover:text-black"> Edit </Link>&nbsp;
                      <Link to={`/books/delete/${book._id}/${book.title}`} className="text-red-500 hover:text-black">
                        {" "}
                        Delete{" "}
                      </Link>
                      &nbsp;
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};
