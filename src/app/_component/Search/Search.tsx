"use client";

import React from "react";

type SearchProps = {
  onSearch: (value: string) => void; // تمرير الـ query من HomePage إلى Search
};

const Search = ({ onSearch }: SearchProps) => {
  return (
    <div className="my-6">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)} // عند الكتابة في الـ input يتم تنفيذ البحث
        placeholder="ابحث عن منتج..."
        className="w-full border rounded-lg px-4 py-2 outline-none"
      />
    </div>
  );
};

export default Search;