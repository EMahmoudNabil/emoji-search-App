import React, { useEffect } from "react";
import Clipboard from "clipboard";
import { EmojiResultRow } from "./EmojiResultRow";

export const EmojiResults = ({ results }) => {
  useEffect(() => {
    new Clipboard(".copy-to-clipboard");
  }, []);

  console.log(results);
  return (
    <div className="component-emoji-results">
      {results.length >= 1 ? (
        results.map((emojiData) => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))
      ) : (
        <h1 className="noSearch"> Search Anther Emoji ....</h1>
      )}
    </div>
  );
};
