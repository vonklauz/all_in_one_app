import { HeaderComponent } from "./HeaderComponent";
import { useMemo } from "react";
import { MENU_LINKS } from "~/Consts";

export const Header = () => {

	const getLinks = useMemo(() => {
		return MENU_LINKS;
	}, []);

	return <HeaderComponent links={getLinks}/>;
}