// import Message from "./components/Message";

import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  // Add tag
  const addTag = () => {
    setTags([...tags, "play"]);
  };

  const removeTags = () => {
    setTags(tags.filter((tag) => tag === tag[tag.length - 1]));
  };

  return (
    <div>
      <br />
      <button
        className="btn btn-danger justify-content-center form-control"
        onClick={addTag}
      >
        Add tag
      </button>
      <br /><br />
      <button
        className="btn btn-danger justify-content-center form-control"
        onClick={removeTags}
      >
        Remove tag
      </button>
      <br /><br />
      {tags + ""}
    </div>
  );
}

export default App;
