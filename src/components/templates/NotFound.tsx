import { FC } from 'react';
import { MainLayout } from './Layouts';
export const NotFound: FC = () => {
	return (
		<MainLayout>
			<div>
				<h3 className="text-center text-danger pt-5">sorry, page not found!</h3>
			</div>
		</MainLayout>
	);
};
