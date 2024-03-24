import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { RouteProps } from "react-router-dom";

enum AppRoutesPath {
    MAIN = '/',
    ABOUT = '/about'
}

const Routes: Record<AppRoutesPath, JSX.Element> = {
    [AppRoutesPath.MAIN]: <MainPage />,
    [AppRoutesPath.ABOUT]: <AboutPage />
};

export const routeConfig: Array<RouteProps> = Object.entries(Routes).map((route: [AppRoutesPath, JSX.Element]) => ({
    path: route[0],
    element: route[1]
}));
