import React from 'react';
import style from './Paginator.module.css';

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChange }) => {
	let pageCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			{pages.map((page) => (
				<span
					key={page.id}
					className={currentPage === page && style.selectedPage}
					onClick={() => {
						onPageChange(page);
					}}
				>
					{page}{' '}
				</span>
			))}
		</div>
	);
};

export default Paginator;
