const Kategori = require('../models/kategori');


exports.getAllKategori = async (req, res) =>{
    try{
        const kategoriData = await Kategori.findAll();
        res.status(200).json(kategoriData);
    } catch (error) {
        console.log('Error kategogi data:', error);
        res.status(500).json({ error: 'Error fetching kategori'})
    }
}
exports.getById = async (req, res) =>{
    const {id} = req.params;
    try{
        const kategoriData = await Kategori.findByPk(id);
        
        if (!kategoriData) {
          return res.status(404).json({ error: 'Kategori not found' });
        }
    
        res.status(200).json(kategoriData);
      } catch (error) {
        console.log('Error fetching kategori data:', error);
        res.status(500).json({ error: 'Error fetching kategori' });
      }
    };

exports.createKategori = async (req, res) =>{
    try{
        const{nama, keterangan}=req.body;
        const kategoriData = await Kategori.create({nama: nama, keterangan: keterangan});
        res.status(200).json(kategoriData);
    } catch (error) {
        console.log('Error tambah kategori', error);
        res.status(500).json({ error: 'Error tambah kategori'})
    }
}
exports.deleteKategori = async (req, res) =>{
    try{
        const id=req.params.id;
        await Kategori.destroy({where: {id}})
        res.status(200).json( "Sukses di hapus");
    } catch (error) {
        console.log('Error Menghapus',error);
        res.status(500).json({ error: 'Error Dihapus kategori'})
    }
}
exports.editKategori = async (req, res) =>{
    try{
        const id= req.params.id;
        const{nama, keterangan}=req.body;
        const kategoriData = await Kategori.update({nama: nama, keterangan: keterangan}, {where:{id}})
        res.status(200).json("berhasil Edit");
    } catch (error) {
        console.log('Error di edit', error);
        res.status(500).json({ error: 'Error kategori diedit '});
    }
}
