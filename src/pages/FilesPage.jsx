import React, { useEffect, useState } from 'react';
import { DeleteData, fetchUserData } from '../firebase/fetchDeleteDataServices'; // Adjust the import path as needed
import { useSelector } from 'react-redux';
import { getStorage, ref, getBlob, getMetadata, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'; // Ensure you import your Firestore instance

export const FilesPage = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = useSelector(state => state.user.userInfo.uid);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const filesData = await fetchUserData(userId, 'files');
        setFiles(filesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchFiles();
    }
  }, [userId]);

  const handleDownload = async (filePath) => {
    if (!userId) {
      alert("You need to log in to download files.");
      return;
    }

    const storage = getStorage();
    const fileRef = ref(storage, filePath);

    try {
      const blob = await getBlob(fileRef);
      const metadata = await getMetadata(fileRef);
      const newBlob = new Blob([blob], { type: metadata.contentType });
      const blobUrl = URL.createObjectURL(newBlob);
      const extension = metadata.contentType.split('/')[1];
      const fileName = decodeURIComponent(filePath.split('/').pop()) || `download.${extension}`;

      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', `${fileName}.${extension}`);
      link.click();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case 'storage/object-not-found':
          errorMessage = 'File does not exist.';
          break;
        case 'storage/unauthorized':
          errorMessage = 'You do not have permission to access this file.';
          break;
        default:
          errorMessage = 'Error downloading file: ' + error.message;
      }
      setError(errorMessage);
    }
  };

  const handleDelete = async (filePath, docId) => {

    try {
      await DeleteData(filePath, 'files', docId);
      setFiles(prevFiles => prevFiles.filter(file => file.id !== docId));
      alert("File deleted successfully.");
    } catch (error) {
      let errorMessage;
      switch (error.code) {
        case 'storage/object-not-found':
          errorMessage = 'File does not exist.';
          break;
        case 'storage/unauthorized':
          errorMessage = 'You do not have permission to delete this file.';
          break;
        default:
          errorMessage = 'Error deleting file: ' + error.message;
      }
      setError(errorMessage);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {files.map(file => (
          <div key={file.id} className="bg-zinc-900 p-4 rounded-lg shadow-md">
            <div className="mb-2">
              <strong className="text-white">Title:</strong> {file.title}
            </div>
            <div className="mb-4">
              <strong className="text-white">Created At:</strong> {formatDate(file.createdAt)}
            </div>
            <div className='flex justify-around'>
            <button
              onClick={() => handleDownload(file.url)}
              className=" bg-blue-500 text-white p-1   rounded hover:bg-blue-600 transition "
            >
              <span class="material-symbols-outlined">
                download
              </span>            </button>
            <button
              onClick={() => handleDelete(file.url, file.id)}
              className="h-fit w-fit bg-red-500 p-1 text-white rounded hover:bg-red-600 transition"
            >
              <span class="material-symbols-outlined">
                delete
              </span>
            </button>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};
