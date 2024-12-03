module.exports = {
  apps: [
    {
      name: "ReactJsVite",
      script: "npm",
      args: "run preview -- --host",
      cwd: "./",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
