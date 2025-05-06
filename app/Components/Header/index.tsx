import { useScreenSize } from "~/hooks/useScreenSize";
import { DesktopHeader } from "./DesktopHeader";
import { DeviceHeader } from "./DeviceHeader";
import { HeaderSkeleton } from "./HeaderSkeleton";
import { useEffect, useState } from "react";

export const Header = () => {
	const [isDesktop, setDesktop] = useState(false);
	const [isDevice, setDevice] = useState(false);
	const { width, height } = useScreenSize();

	useEffect(() => {
		if (width > 991) {
			setDesktop(true);
		}

		if (width < 992) {
			setDevice(true);
		}
	}, [width])


	if (isDesktop) {
		return <DesktopHeader />;
	}

	if (isDevice) {
		return <DeviceHeader />;
	}

	return <HeaderSkeleton />;
}