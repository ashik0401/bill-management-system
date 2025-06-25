import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const navigate=useNavigate()


  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoUrl(user.photoURL || '');
    }
  }, [user]);

  const handleUpdate =(e) => {
    e.preventDefault();

    try {
       updateUser({ displayName: name, photoURL: photoUrl });

      setUser({ ...user, displayName: name, photoURL: photoUrl });
      navigate('/profile')

      toast.success("Profile updated!");
    } catch (error) {
      console.error("Failed to update:", error);
    }
  };

  return (
   <div className='bg-sky-100 px-5'>
     <div className="max-w-md mx-auto  p-6 bg-sky-100 shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Update Profile Information</h2>
      <form onSubmit={handleUpdate} className="md:space-y-4 space-y-2">
        <div>
          <label className="block mb-1 font-medium">Photo URL</label>
          <input
            type="text"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your photo URL"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your name"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Update Information
        </button>
      </form>
    </div>
   </div>
  );
};

export default UpdateProfile;
