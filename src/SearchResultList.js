// import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div>
            <SearchResult result={result.title} key={id} />
            <img src={result.url} width="100px" height="100px" />
          </div>
        )

      })}
    </div>
  );
};
