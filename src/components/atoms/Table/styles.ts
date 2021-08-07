/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { TableProps } from '.';

export const TableWrapper = styled.div`
	width: 100%;
	display: block;
	overflow: hidden;
	overflow-x: auto;
`;

export const TableContainer = styled.table<TableProps>`
	width: 100%;
	margin-bottom: 0;
	border-collapse: collapse;

	thead {
		vertical-align: bottom;
	}

	tr {
		${({ clickable }) => {
			if (clickable) {
				return css`
					transition: background-color 0.2s ease-in-out;

					&:hover {
						background-color: var(--light);
					}

					td {
						cursor: pointer;
						background-color: transparent;
					}
				`;
			}
		}}
	}

	th,
	td {
		padding: 0.75rem 0.5rem;
		background-color: var(--white);
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	th {
		font-weight: 600;
	}

	td {
		color: #9b9b9b;
		border-top: none;
	}
`;
