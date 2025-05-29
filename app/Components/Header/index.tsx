import { HeaderComponent } from "./HeaderComponent";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_LINKS } from "~/Consts";
import type { RootState } from "~/Store";

export const Header = () => {
	const user = useSelector((state: RootState) => state.userSlice.user);

	const getLinks = useMemo(() => {
		if (user.userId) {
			return MENU_LINKS;
		}
		return MENU_LINKS.filter((item) => !item.isProtected);
	}, [user]);

	return <HeaderComponent links={getLinks} />;
}