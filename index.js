const StyleDictionary = require("style-dictionary");

// Register a custom transform for typography
StyleDictionary.registerTransform({
  name: "typography/shorthand",
  type: "value",
  matcher: function (prop) {
    return prop.attributes.category === "typography";
  },
  transformer: function (prop) {
    const { fontSize, fontWeight, lineHeight, fontFamily } = prop.value;
    return `${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
  },
});

// Register the transform to a custom transform group
StyleDictionary.registerTransformGroup({
  name: "custom",
  transforms: ["attribute/cti", "name/cti/kebab", "typography/shorthand"],
});

// Configure the Style Dictionary
const StyleDictionaryConfig = {
  source: ["path/to/your/tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "custom",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};

// Extend and build the Style Dictionary
const StyleDictionaryExtended = StyleDictionary.extend(StyleDictionaryConfig);
StyleDictionaryExtended.buildAllPlatforms();
