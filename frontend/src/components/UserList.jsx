import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, {useSWRConfig} from 'swr';



const UserList = () => {
    const {mutate} = useSWRConfig();
    const fetch = async () =>{
        const res = await axios.get('http://localhost:5000/user');
        return res.data;
    };

    const {data} = useSWR('user', fetch);
    if(!data) return <h2>Menunggu...</h2>

    const deleteUser = async(userId) => {
        await axios.delete(`http://localhost:5000/user/${userId}`);
        mutate('user');
    }

  return (
    <div className='flex flex-col mt-5'>
        <div>
            <Link to="/tambah" className="bg-green-400 hover:bg-green-700 border border-slate-300 text-white font-bold py-2 px-4 rounded-lg ml-10">Tambah Data Baru</Link>
            <div className="relative shadow rounded-lg mt-10 mr-10 ml-10">
                <table className='w-full text-sm text-left text-gray-500'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                        <tr>
                            <th className='py-3 px-1 text-center'>No</th>
                            <th className='py-3 px-6'>Nama Anggota</th>
                            <th className='py-3 px-6'>Kode Anggota</th>
                            <th className='py-3 px-6'>Tanggal Lahir</th>
                            <th className='py-3 px-6'>Tempat Lahir</th>
                            <th className='py-3 px-6'>Tanggal Pendaftaran</th>
                            <th className='py-3 px-1 text-center'>DATA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) =>(
                            <tr className='bg-white border-b' key={user.id}>
                            <td className='py-3 px-1 text-center'>{index+1}</td>
                            <td className='py-3 px-6 font-medium text-gray-900'>{user.nAnggota}</td>
                            <td className='py-3 px-6'>{user.kAnggota}</td>
                            <td className='py-3 px-6'>{user.tLahir}</td>
                            <td className='py-3 px-6'>{user.temLahir}</td>
                            <td className='py-3 px-6'>{user.tdaf}</td>
                            <td className='py-3 px-1 text-center'>
                                <Link to={`/update/${user.id}`} className="font-medium bg-blue-400 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1">Update</Link>
                                <button onClick={() => deleteUser(user.id)}  className="font-medium bg-red-400 hover:bg-red-700 px-3 py-1 rounded text-white">Delete</button>
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default UserList