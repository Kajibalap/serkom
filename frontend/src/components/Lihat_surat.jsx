import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Lihat_surat = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [noSurat, setNoSurat] = useState("");
  const [kategori, setKategori] = useState([]);
  const [kategoriId, setKategoriId] = useState("");
  const [judul, setJudul] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/arsip/${id}`);
        const kategoriResponse = await axios.get("http://localhost:3000/kategori");
        setKategori(kategoriResponse.data);
        const data = response.data;
        setNoSurat(data.no_surat);
        setKategoriId(data.id_kategori);
        setJudul(data.judul);
        setFile(data.file);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const getKategoriNama = (kategoriId) => {
    const kategoriItem = kategori.find((item) => item.id === kategoriId);
    return kategoriItem ? kategoriItem.nama : "Unknown";
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <div className="mx-auto max-w-lg text-center">
          <h4 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Lihat Surat
          </h4>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-6">
          <table className="w-full">
            <tbody>
              <tr>
                <td>
                  <label className="block mb-2 ml-2 text-sm font-medium text-gray-700">
                    Nomor Surat
                  </label>
                </td>
                <td>
                  <div className="relative pl-5">
                    <input
                      type="text"
                      value={noSurat}
                      className="w-full rounded-lg h-5 mb-3 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      disabled
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="block mb-2 ml-2 text-sm font-medium text-gray-700">
                    Kategori
                  </label>
                </td>
                <td>
                  <div className="relative pl-5">
                    <input
                      type="text"
                      value={getKategoriNama(kategoriId)}
                      className="w-full rounded-lg h-5 mb-3 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      disabled
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="block mb-2 ml-2 text-sm font-medium text-gray-700">
                    Judul
                  </label>
                </td>
                <td>
                  <div className="relative pl-5">
                    <input
                      type="text"
                      value={judul}
                      className="w-full rounded-lg h-5 mb-3 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      disabled
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="block mb-2 ml-2 text-sm font-medium text-gray-700">
                    File Surat (PDF)
                  </label>
                </td>
                <td>
                  <div className="relative pl-5">
                    {file ? (
                      <iframe
                        src={`http://localhost:3000${file}`}
                        type="application/pdf"
                        className="w-full h-[100vh]"
                      />
                    ) : (
                      <p className="text-red-500">File tidak tersedia</p>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-right">
            <NavLink to="/">
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

export default Lihat_surat;