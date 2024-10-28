import React from 'react';
import styles from './users.module.scss';
import Image from 'next/image';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange(Number(e.target.value));
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.info}>
        Showing
        <select value={itemsPerPage} onChange={handleItemsPerPageChange} className={styles.dropdown}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        out of {totalItems}
      </div>
      <div className={styles.pages}>
        <button className={styles.pageButton}><Image src={'/assets/arrow-left.svg'} alt='arrow-left' width={12} height={12} /></button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`${styles.pageBtn} ${page === currentPage ? styles.active : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button className={styles.pageButton}><Image src={'/assets/arrow-right.svg'} alt='arrow-right' width={12} height={12} /></button>
      </div>
    </div>
  );
};

export default Pagination;
