import { FC } from 'react';
import { MainLayout } from '../components/others';

export const NotFound: FC = () => {
    return (
        <MainLayout>
            <div style={{ minHeight: 'calc(100vh - 197px)' }}>
                <h3 className="text-center text-danger mt-5 pt-5">
                    sorry, page not found!
                </h3>
            </div>
        </MainLayout>
    );
};
