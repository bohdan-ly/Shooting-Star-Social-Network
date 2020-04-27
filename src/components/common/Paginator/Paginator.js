import React, { useState } from 'react';
import style from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 20 }) => {
	debugger;
	let pageCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(pageCount / portionSize);
	const [ portionNumber, setPortionNumber ] = useState(1);
	const startIndex = (portionNumber - 1) * portionSize;
	const endIndex = portionNumber * portionSize;

	return (
		<div className={style.pagination}>
			{portionCount > 1 && (
				<button
					onClick={() => {
						if (!startIndex) return;
						setPortionNumber(portionNumber - 1);
					}}
				>
					{'<<'}
				</button>
			)}
			{pages.filter((p) => p > startIndex && p <= endIndex).map((page) => {
				return (
					<span
						key={page.id}
						className={cn({ [style.selectedPage]: currentPage === page }, style.pageNumber)}
						onClick={() => {
							onPageChange(page);
						}}
					>
						{page}{' '}
					</span>
				);
			})}
			{portionCount > portionNumber && (
				<button
					onClick={() => {
						if (endIndex === totalItemsCount) return;
						setPortionNumber(portionNumber + 1);
					}}
				>
					{'>>'}
				</button>
			)}
		</div>
	);
};

export default Paginator;
