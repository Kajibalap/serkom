import { Route, BrowserRouter, Routes } from "react-router-dom";
import Arsip from "../components/Arsip";
import Kategori from "../components/Kategori";
import About from "../components/About";
import Sidebar from "../components/Sidebar";
import Tambah_kategori from "../components/Tambah_kategori";
import Tambah_arsip from "../components/Tambah_arsip";
import Edit_katergori from "../components/Edit_katergori";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Lihat_surat from "../components/Lihat_surat";
import Edit_arsip from "../components/Edit_arsip";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          
          <Routes>
            <Route path="/" element={<Arsip />} />
            <Route path="/kategori" element={<Kategori />} />
            <Route path="/about" element={<About />} />
            <Route path="/kategori/tambah_kategori" element={<Tambah_kategori/>}/>
            <Route path="/arsip/tambah_arsip" element={<Tambah_arsip/>}/>
            <Route path="/kategori/:id" element={<Edit_katergori />}/>
            <Route path="/arsip/lihat/:id" element={<Lihat_surat/>}/>
            <Route path="/arsip/edit/:id" element={<Edit_arsip />}/>
          </Routes>
        </div>
      </div>

      <ToastContainer />
    </BrowserRouter>
  );
};

export default Router;
