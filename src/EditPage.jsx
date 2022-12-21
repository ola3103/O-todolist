const EditPage = function ({ editFormData, setEditFormData, handleUpdate }) {
  return (
    <>
      <div className="edit-form--box">
        <input
          className="edit--form"
          type="text"
          value={editFormData}
          onChange={(e) => setEditFormData(e.target.value)}
        />
        <button onClick={handleUpdate} className="update--btn">
          Update
        </button>
      </div>
    </>
  );
};

export default EditPage;
