import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Header from "./Header";
import AddIcon from "@mui/icons-material/Add";
import { NavLink, useParams } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-toastify";

const Arsip = () => {
  const [arsip, setArsip] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const arsipResponse = await axios.get("http://localhost:3000/arsip");
      const kategoriResponse = await axios.get("http://localhost:3000/kategori");
      setArsip(arsipResponse.data);
      setKategori(kategoriResponse.data);
    } catch (error) {
      console.log("Error ambil data");
    }
  };

  const getKategoriNama = (kategoriId) => {
    const kategoriItem = kategori.find((item) => item.id === kategoriId);
    return kategoriItem ? kategoriItem.nama : "Unknown";
  };

  const handleDelete = async (id) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus surat dengan nomor ${id}?`)) {
      try {
        await axios.delete(`http://localhost:3000/arsip/${id}`);
        setArsip(arsip.filter((item) => item.id !== id));
        console.log("Sukses hapus");
      } catch (error) {
        console.log("Error deleting item:", error);
      }
    }
  };

  const handleDownload = async (file) => {
    try {
      const response = await fetch(`http://localhost:3000${file}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file.split("/").pop() || "file");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      toast.success("File berhasil diunduh");
    } catch (error) {
      toast.error("Gagal mengunduh file");
      console.error("There was an error downloading the file:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header judul="Arsip Surat" text="Untuk menambahkan surat yang akan di buat." />

      <div className="grid gap-4 grid-cols-2 items-center">
        <NavLink
          className="w-fit ml-10 group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          to="/arsip/tambah_arsip"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>

          <span className="relative block border border-current bg-white px-4 py-2 rounded-lg">
            <AddIcon />
            Tambah Surat
          </span>
        </NavLink>
        <div className="flex justify-end mr-10">
          <input
            type="text"
            placeholder="Cari Judul Surat"
            className="w-full p-3 border border-zinc-300 rounded-md border-gray-200 shadow-sm sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="mx-10 mt-10">
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-50">
              <tr className="text-center">
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  No Surat
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Kategori
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Judul
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Tanggal
                </th>
                <th
                  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                  colSpan={3}
                >
                  Opsi
                </th>
              </tr>
            </thead>
            <tbody>
              {arsip
                .filter((item) =>
                  item.judul.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <tr className="hover:bg-gray-50 text-center" key={item.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {item.no_surat}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {getKategoriNama(item.id_kategori)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.judul}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {item.createdAt}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <div className="flex space-x-2">
                        <NavLink to={`/arsip/lihat/${item.id}`}>
                          <button className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-medium text-white hover:bg-blue-600">
                            <RemoveRedEyeIcon />
                            Lihat
                          </button>
                        </NavLink>
                        <button
                          onClick={() => handleDownload(item.file)}
                          className="inline-block rounded-lg bg-green-500 px-3 py-1 text-sm font-medium text-white hover:bg-green-600"
                        >
                          <FileDownloadIcon />
                          Unduh
                        </button>
                        <button
                          className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600"
                          onClick={() => handleDelete(item.id)}
                        >
                          <DeleteIcon /> Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Arsip;
