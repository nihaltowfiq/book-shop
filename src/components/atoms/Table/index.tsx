import { FC, TableHTMLAttributes } from 'react';
import { TableContainer, TableWrapper } from './styles';

export const Table: FC<TableProps> = ({ children, responsive, ...rest }) =>
	responsive ? (
		<TableWrapper>
			<TableContainer {...rest}>{children}</TableContainer>
		</TableWrapper>
	) : (
		<TableContainer {...rest}>{children}</TableContainer>
	);

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
	clickable?: boolean;
	responsive?: boolean;
}

Table.defaultProps = {
	clickable: false,
	responsive: false,
};
