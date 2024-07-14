import axios from "axios";
import { toast } from 'react-toastify';
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Edit_katergori = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [keterangan, setKeterangan] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/kategori/${id}`);
        const data = response.data;
        setNama(data.nama);
        setKeterangan(data.keterangan);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]); // Fetch data when id changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/kategori/${id}`, {
        nama: nama,
        keterangan: keterangan,
      });
      navigate('/kategori')
      toast.success('Kategori berhasil diperbarui');
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Edit Kategori
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-6">
          <table>
            <tr>
              <td>
                {" "}
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-700">
                  ID
                </label>
              </td>
              <td>
                {" "}
                <div className="relative pl-5">
                  <input
                    type="text"
                    className="w-full rounded-lg border h-5 mb-3 bg-slate-200 border-gray-300 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={id}
                    disabled
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="block mb-2 ml-2 text-sm font-medium text-gray-700">
                  Nama Kategori
                </label>
              </td>
              <td>
                <div className="relative pl-5">
                  <input
                    type="text"
                    className="w-full rounded-lg border h-5 mb-3 border-gray-300 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Nama Kategori"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="block mb-2 ml-2 h-32 text-sm font-medium text-gray-700">
                  Judul
                </label>
              </td>
              <td>
                <div className="relative pl-5">
                  <textarea
                    className="w-full rounded-lg border h-32 mb-3 border-gray-300 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Judul Surat"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                  ></textarea>
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
              Selesai
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit_katergori;
