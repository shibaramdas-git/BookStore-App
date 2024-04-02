import React, { useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios'

export const Deletebook = () => {
  const { id, title} = useParams();
  const navigate = useNavigate();
  function handleDeleteBook(){
      axios
        .delete(`http://localhost:5000/books/${id}`)
        .then(() => navigate('/'))
        .catch((error) => {
          alert('OOPS!! Something went Wrong, please check console');
          console.log(error);
        });

  }
  return (
    <div className="w-2/5 mx-auto mt-[50px] shadow-lg px-10 py-8 border border-slate-200 rounded-md text-center bg-white">
      <p className="">Do you really want to delete this book ?</p>
      <p className="">" {title} "</p>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleDeleteBook}
          className="bg-orange-700 text-white px-4 py-1.5 my-2 mr-8 rounded-md"
        >
          Confirm
        </button>
        <Link to={'/'}>
        <button
          className="bg-blue-600 text-white px-4 py-2 my-2 rounded-md"
        >
          Cancel
        </button>.
        </Link>
      </div>
    </div>
  );
};
