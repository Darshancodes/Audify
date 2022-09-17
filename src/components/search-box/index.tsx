import React, { FC, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import useDarkMode from '../../hooks/useDarkMode';

export interface ISearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: FC<ISearchBoxProps> = ({ onSearch }) => {
  const [colorTheme, setTheme] = useDarkMode();

  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center justify-center bg-transparent px-4 pt-6">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          className="z-0 bg-gray-100 w-full pl-10 text-lg font-semibold text-gray-700 dark:text-zinc-100 rounded shadow pr-7 h-14 ring-2 ring-slate-300 light:ring-zinc-600 focus:shadow-md focus:outline-none"
          placeholder="Search..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="absolute top-4 left-3">
          <IconContext.Provider
            value={{
              className: 'text-gray-400 text-2xl text-indigo-400',
            }}
          >
            <BiSearch />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;