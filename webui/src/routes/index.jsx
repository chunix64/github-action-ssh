import { createBrowserRouter } from "react-router";
import { Fragment } from "react";

import config from "@/config";
import DefaultLayout from "@/layouts/DefaultLayout";

import NotFound from "@/pages/NotFound"
import Home from "@/pages/Home"
import ComingSoon from "@/pages/ComingSoon"

function createRoute(path, Component, Layout) {
  let AppliedLayout = DefaultLayout;

  if (Layout) {
    AppliedLayout = Layout;
  } else if (Layout === null) {
    AppliedLayout = Fragment;
  }

  return {
    path,
    element: (
      <AppliedLayout>
        <Component />
      </AppliedLayout>
    ),
  };
}

const publicRoutes = createBrowserRouter([
  createRoute(config.routes.notFound, NotFound),
  createRoute(config.routes.root, Home),
  createRoute(config.routes.home, Home),
  createRoute(config.routes.toolbox, ComingSoon),
  createRoute(config.routes.logs, ComingSoon),
  createRoute(config.routes.terminal, ComingSoon),
  createRoute(config.routes.settings, ComingSoon),
]);

const privateRoutes = [];

export { publicRoutes, privateRoutes };
