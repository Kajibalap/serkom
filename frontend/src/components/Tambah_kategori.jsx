import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Tambah_kategori = () => {
  const [nama, setNama] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const dataKategori = await axios.post("http://localhost:3000/kategori", {
        nama,
        keterangan,
      });
      navigate("/kategori");
      toast.success("Surat berhasil diarsipkan!");
    } catch (error) {
      console.error("Data Error Tambah");
      toast.error("Gagal mengarsipkan surat!");
    }
  };
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tambah Kategori
          </h1>
        </div>

        <form onSubmit={handleSubmitForm} className="mx-auto mb-0 mt-8 max-w-md space-y-6">
          <table>
          <tr>
            <td> <label className="block mb-2 ml-2 text-sm font-medium text-gray-700">
              Nama Kategori
            </label></td>
            <td> <div className="relative pl-5">
              <input
                type="text"value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full rounded-lg border h-5 mb-3  border-gray-300 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nama Kategori"
              />
            </div>
            </td>
            </tr>
          <tr>
            <td> <label className="block mb-2 ml-2 h-32 text-sm font-medium text-gray-700">
              Keterangan
            </label></td>
            <td> <div className="relative pl-5">
              <textarea value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)} className="w-full rounded-lg border h-32 mb-3  border-gray-300 p-1 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Keterangan Surat"></textarea>
            </div>
            </td>
            </tr>
          </table>
          <div className="text-right">
            <NavLink to="/kategori">
              <button
                type="button"
                className="inline-block rounded-lg mr-2 bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              >
                Kembali
              </button>
            </NavLink>
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tambah_kategori
