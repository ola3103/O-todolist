const EditPage = function ({ editFormData, setEditFormData, handleUpdate }) {
  return (
    <>
      <input
        className="edit--form"
        type="text"
        value={editFormData}
        onChange={(e) => setEditFormData(e.target.value)}
      />
      <button onClick={handleUpdate} className="update--btn">
        Update
      </button>
    </>
  );
};

export default EditPage;
