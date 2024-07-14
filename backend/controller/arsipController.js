const Arsip = require("../models/arsip");
const upload = require("../config/multer");

exports.getAllArsip = async (req, res) => {
  try {
    const arsipData = await Arsip.findAll();
    res.status(200).json(arsipData);
  } catch (error) {
    console.error("Error fetching arsip:", error);
    res.status(500).json({ error: "Error fetching arsip" });
  }
};
exports.getById = async (req, res) => {
  try {
    const {id} = req.params;
    const arsipData = await Arsip.findByPk(id);
    res.status(200).json(arsipData);
  } catch (error) {
    console.log("Error fetching arsip", error);
    res.status(500).json({ error: "Error fetching arsip"});
  }
}
exports.createArsip = async (req, res) => {
  try {
    const { no_surat, judul, id_kategori } = req.body;
    const file = req.file ? `/upload/${req.file.filename}` : null;

    const arsipData = await Arsip.create({
      no_surat,
      judul,
      id_kategori,
      file,
    });

    res
      .status(200)
      .json({ message: "Arsip berhasil ditambahkan", data: arsipData });
  } catch (error) {
    console.error("Error tambah arsip:", error);
    res.status(500).json({ error: "Gagal menambahkan arsip" });
  }
};
exports.deleteArsip = async (req, res) => {
  try {
    const id = req.params.id;
    await Arsip.destroy({ where: { id } });
    res.status(200).json("Sukses di hapus arsip");
  } catch (error) {
    console.log("Error Menghapus", error);
    res.status(500).json({ error: "Error di hapus arsip" });
  }
};
exports.editArsip = async (req, res) => {
  try {
    const id = req.params.id;
    const { no_surat, judul, id_kategori } = req.body;
    const file = req.file ? `/upload/${req.file.filename}` : null;
    const arsipData = await Arsip.update({
      no_surat,
      judul,
      id_kategori,
      file,
    },{where:{id}});
    res.status(200).json("Berhasil di edit");
  } catch (error) {
    console.log("Error di edit", error);
    res.status(500).json({ error: "Error arsip di edit" });
  }
};
