import { createContext, FC, useContext, useState } from 'react';

interface IInitialValues {
	isSignIn: boolean;
	onSignin: () => void;
}

const AuthCtx = createContext<IInitialValues>(null);

export const useAuthCtx = (): IInitialValues => useContext(AuthCtx);

const AuthCtxProvider: FC = ({ children }) => {
	const [signInUser, setSignInUser] = useState<boolean>(false);

	const onSignin = () => setSignInUser(true);

	return <AuthCtx.Provider value={{ isSignIn: signInUser, onSignin }}>{children}</AuthCtx.Provider>;
};

export default AuthCtxProvider;
