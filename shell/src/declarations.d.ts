declare module "layout/Layout" {
  import React from "react";
  const Layout: React.ComponentType<{ children?: React.ReactNode }>;
  export default Layout;
}

declare module "home/HomeApp" {
  import React from "react";
  const HomeApp: React.ComponentType;
  export default HomeApp;
}

declare module "movies/Movies" {
  import React from "react";
  const Movies: React.ComponentType;
  export default Movies;
}