import { Pagination } from "react-bootstrap";
export default function Paginator(props) {
  const { items, perPage, currentPage, changePage, className } = props;

  const handleChangePage = (page) => {
    changePage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {pageNumbers.map((number) => (
        <Pagination.Item
          active={currentPage === number}
          key={number}
          onClick={() => handleChangePage(number)}
          className={className}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      />
    </Pagination>
  );
}
