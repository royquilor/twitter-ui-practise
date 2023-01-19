const PostForm = () => {
  return (
    <form className="flex gap-x-2 p-8">
      <input
        type="textarea"
        placeholder="Text input"
        className="w-full px-4 py-2 text-sm bg-slate-200 border-slate-200 placeholder:text-slate-600 rounded-full"
      />
      <button className="bg-slate-900 text-white px-4 py-2 text-sm rounded-full">
        Tweet
      </button>
    </form>
  );
};

export default PostForm;
