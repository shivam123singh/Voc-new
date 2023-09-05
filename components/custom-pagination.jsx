import React from 'react';

const CustomPagination = ({ pageIndex, pageCount, gotoPage }) => {
  const paginationNumbers = [];

  if (pageCount <= 7) {
    for (let i = 0; i < pageCount; i++) {
      paginationNumbers.push(i);
    }
  } else {
    paginationNumbers.push(0, 1, 2, '...', pageCount - 3, pageCount - 2, pageCount - 1);
  }

  return (
    <div className="pagination">
      {paginationNumbers.map((item, index) => (
        <button
          key={index}
          className={`page-number px-4 py-2 text-sm ${item === pageIndex - 1 ? 'active bg-[#FEF2C0] rounded-lg' : 'text-grey-500'}`}
          onClick={() => {
            if (typeof item === 'number') {
              gotoPage(item);
            }
          }}
        >
          {typeof item === 'number' ? item + 1 : item}
        </button>
      ))}
    </div>
  );
};

export default CustomPagination;
