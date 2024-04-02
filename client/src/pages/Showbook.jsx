import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams , Link} from "react-router-dom";
import { Loading } from "../components/Loading";

export const Showbook = () => {
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between mx-6  my-4 p-2">
        <h1 className="text-2xl font-bold">Book Details</h1>
        <Link to={'/'}
        className="border border-zinc-700 bg-slate-50 rounded-md hover:bg-amber-100 px-4 py-1.5">
            Back
        </Link>
      </div>
      {loading && <Loading />}
      {book && (
        <div className="flex justify-center border shadow-lg mx-8 my-2 px-8 py-6 bg-white border-zinc-200 rounded-lg">
          <div className="w-1/5 font-bold">
            <p>Book title</p>
            <p>Author name</p>
            <p>Published year</p>
            <p>ISBN</p>
            <p>Create date</p>
            <p>Last update date</p>
          </div>
          <div className="w-4/5">
            <p>: &nbsp;&nbsp;&nbsp;{book.title}</p>
            <p>: &nbsp;&nbsp;&nbsp;{book.author}</p>
            <p>: &nbsp;&nbsp;&nbsp;{book.publishYear}</p>
            <p>: &nbsp;&nbsp;&nbsp;{book.isbn}</p>
            <p>: &nbsp;&nbsp;&nbsp;{new Date(book.createdAt).toString()}</p>
            <p>: &nbsp;&nbsp;&nbsp;{new Date(book.updatedAt).toString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};
