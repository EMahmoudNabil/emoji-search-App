import { useState } from "react";
import "./App.css";
import { EmojiResults } from "./components/EmojiResults";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import filterEmoji from "./utils/FilterEmoji";

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [results, setResult] = useState(filterEmoji(textSearch, 20));

  return (
    <>
      <Header />
      <SearchInput handleSearchChange={setTextSearch} />

      <EmojiResults
        results={results.filter((result) =>
          result.title.toLowerCase().includes(textSearch)
        )}
        setResult={setResult}
      />
    </>
  );
}

export default App;
