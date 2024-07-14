import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit_arsip = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [noSurat, setNoSurat] = useState("");
  const [kategori, setKategori] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState("");
  const [judul, setJudul] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseArsip = await axios.get(`http://localhost:3000/arsip/${id}`);
      const responseKategori = await axios.get("http://localhost:3000/kategori");
      const dataArsip = responseArsip.data;
      setNoSurat(dataArsip.no_surat);
      setSelectedKategori(dataArsip.id_kategori);
      setJudul(dataArsip.judul);
      setKategori(responseKategori.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("no_surat", noSurat);
    formData.append("judul", judul);
    formData.append("id_kategori", selectedKategori);
    if (file) {
      formData.append("file", file);
    }

    try {
      await axios.put(`http://localhost:3000/arsip/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
      toast.success("Arsip berhasil diperbarui!");
    } catch (error) {
      console.error("Error updating arsip:", error);
      toast.error("Gagal memperbarui arsip!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Edit Arsip
          </h1>
        </div>

        <form
          onSubmit={handleSubmitForm}
          className="mx-auto mb-0 mt-8 max-w-md space-y-6"
        >
          <table>
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
                      onChange={(e) => setNoSurat(e.target.value)}
                      className="w-full rounded-lg border h-5 mb-3 border-gray-300 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="No Surat"
                      required
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
                    <select
                      value={selectedKategori}
                      onChange={(e) => setSelectedKategori(e.target.value)}
                      className="w-full rounded-lg border mb-3 border-gray-300 p-1 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>
                        Pilih Kategori
                      </option>
                      {kategori.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.nama}
                        </option>
                      ))}
                    </select>
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
                      onChange={(e) => setJudul(e.target.value)}
                      className="w-full rounded-lg border h-5 mb-3 border-gray-300 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Judul Surat"
                      required
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
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="w-full rounded-lg border mb-3 border-gray-300 p-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
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
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit_arsip;
