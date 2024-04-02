import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components/Loading";

export const Createbook = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const [isbn, setIsbn] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function handleSaveBook() {
    const data = {
      title,
      author,
      publishYear,
      isbn,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Something went wrong. Please check console.");
        console.log(error);
      });
  }

  return (
    <div className="flex justify-center items-center m-6 ">
      <section className=" p-8 border border-zinc-200 shadow-xl w-1/2 rounded-lg bg-white">
        <div className="text-center font-bold text-xl">New Book Details</div>
        Book Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full ps-3 py-1.5 mb-2 mt-1 "
          placeholder="Type book title"
          required={true}
        />
        Author name
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full ps-3 py-1.5 mb-2 mt-1 "
          placeholder="Type author name"
          required={true}
        />
        Publish year
        <input
          type="number"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full ps-3 py-1.5 mb-2 mt-1 "
          placeholder="Type published year"
          required={true}
        />
        ISBN
        <input
          type="number"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full ps-3 py-1.5 mb-2 mt-1 "
          placeholder="Type ISBN number"
          required={true}
        />
        <div className="flex justify-center">
          <button onClick={handleSaveBook} className="bg-blue-700 text-white px-4 py-2 m-2 rounded-md">
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};
