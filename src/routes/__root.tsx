import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header/Header";
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <Header />
    <hr />
    <Outlet />
    {/* <TanStackRouterDevtools /> */}
  </>
);

export const Route = createRootRoute({ component: RootLayout });
