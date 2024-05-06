import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/home-page/home-page"));
const PodcastDetail = lazy(
  () => import("../pages/podcast-detail/podcast-detail")
);

const PodcastEpisodesDisplayer = lazy(
  () => import("../pages/podcast-detail/components/podcast-episodes-displayer")
);

const PodcastEpisodesDetail = lazy(
  () => import("../pages/podcast-detail/components/episodes-detail")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/podcast",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PodcastDetail />
      </Suspense>
    ),
    children: [
      {
        path: ":id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PodcastEpisodesDisplayer />
          </Suspense>
        ),
      },
      {
        path: ":id/episode/:episodeId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PodcastEpisodesDetail />
          </Suspense>
        ),
      },
    ],
  },
]);
