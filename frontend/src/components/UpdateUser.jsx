import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

const UpdateUser = () => {
    const [nAnggota, setNama] = useState("");
    const [kAnggota, setKode] = useState("");
    const [tLahir, setTL] = useState("");
    const [temLahir, setTTL] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect (() => {
        const getUserById = async () => {
            const res = await axios.get(`http://localhost:5000/user/${id}`);
            setNama(res.data.nAnggota);
            setKode(res.data.kAnggota);
            setTL(res.data.tLahir);
            setTTL(res.data.temLahir);
        };
        getUserById();
    }, [id]);

    const updateUser = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/user/${id}`,{
            nAnggota: nAnggota,
            kAnggota: kAnggota,
            tLahir: tLahir,
            temLahir: temLahir
        });
        navigate("/");
    }

  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form onSubmit={updateUser} className='my-10'>
            <div className="flex flex-col">
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Nama Anggota</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Nama Anggota'value={nAnggota} onChange={(e) => setNama(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Kartu Anggota</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Kartu Anggota' value={kAnggota} onChange={(e) => setKode(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Tangal Lahir</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Contoh: 17/08/1945' value={tLahir} onChange={(e) => setTL(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Tempat Lahir</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Tempat Lahir' value={temLahir} onChange={(e) => setTTL(e.target.value)}/>
                </div>
                <button type="submit" className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border border-indigo-500 hover:shadow'>Update Data</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateUser