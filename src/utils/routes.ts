export const AppRoutes = {
  path: "/auth",
  auth: {
    onboarding: {
      path: "/auth/onboarding",
    },
    signup: {
      path: "/auth/signup",
    },
    login: {
      path: "/auth/login",
    },
  },
  dashboard: {
    path: "/dashboard",
    home: {
      path: "/dashboard/home",
      create: {
        path: "/dashboard/home/create",
        preview: {
          path: "/dashboard/home/create/preview",
        },
      },
      edit: {
        path: "/dashboard/home/edit",
      },
      templates: {
        path: "/dashboard/home/templates",
      },
      docs: {
        path: "/dashboard/home/docs",
      },
      terms: {
        path: "/dashboard/home/terms",
      },
    },
  },
};
