module.exports = {
  apps: [
    {
      name: "ReactJsVite",
      script: "npm",
      args: "run preview",
      cwd: "./",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
