import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NavLink, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
const Kategori = () => {
  const [kategori, setKategori] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/kategori");
      setKategori(data.data);
      console.log(data);
    } catch (error) {
      console.error("Error ambil data");
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm(`Apakah anda ingin menghapus kategori ${id}`)) {
      try {
        await axios.delete(`http://localhost:3000/kategori/${id}`);
        setKategori(kategori.filter((item) => item.id !== id));
        console.log("Sukses menghapus");
      } catch (error) {
        console.log("Error delete item:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header judul="Kategori Surat" text="Untuk menambahkan kategori surat." />

      <div className="grid gap-4 grid-cols-2 items-center">
        <NavLink
          className=" w-fit ml-10 group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          to="/kategori/tambah_kategori"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>

          <span className="relative block border border-current bg-white px-4 py-2 rounded-lg">
            {" "}
            <AddIcon />
            Tambah Kategori
          </span>
        </NavLink>
        <div className="flex justify-end mr-10">
          <label htmlFor="UserEmail" className="sr-only">
            {" "}
            Email{" "}
          </label>

          <input
            type="email"
            id="UserEmail"
            placeholder="Cari Kategori"
            className="w-full p-3 border border-zinc-300 rounded-md border-gray-200   shadow-sm sm:text-sm"
          />
          <button className="relative ml-2 border-current  bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="mx-10 mt-10">
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-50">
              <tr className="text-center">
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  ID Kategori
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Nama Kategori
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Keterangan
                </th>
                <th
                  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                  colSpan={2}
                >
                  Opsi
                </th>
              </tr>
            </thead>
            {kategori.map((item) => (
              <tbody className="divide-y divide-gray-200" key={item.id}>
                <tr className="text-center">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.nama}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.keterangan}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <button
                        className="inline-block rounded-lg bg-red-500 mr-2 px-3 py-1 text-sm font-medium text-white hover: hover:bg-red-600"
                        onClick={() => handleDelete(item.id)}
                      >
                        <DeleteIcon />
                        Hapus
                      </button>
                      <NavLink to={`/kategori/${item.id}`}>
                        <button className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm font-medium text-white hover:bg-yellow-600">
                          <EditIcon />
                          Edit
                        </button>
                      </NavLink>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
