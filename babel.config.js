/** @format */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            components: "./src/components",
            icons: "./assets/icons",
            images: "./assets/images",
            vectors: "./assets/vectors",
            configs: "./src/configs",
            helpers: "./src/helpers",
            screens: "./src/screens",
            containers: "./src/containers",
            store: "./src/store",
            theme: "./src/theme",
            types: "./src/types",
            constants: "./src/constants",
            mock: "./src/mock",
            routers: "./src/routers",
          },
        },
      ],
    ],
  };
};
