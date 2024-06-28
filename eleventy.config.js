/**
 * Hint VS Code for eleventyConfig autocompletion.
 * © Henry Desroches - https://gist.github.com/xdesro/69583b25d281d055cd12b144381123bf
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig -
 * @returns {Object} -
 */

import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

export default async function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/*');
  eleventyConfig.addPassthroughCopy('src/*.{css,js,jpg,ico}');

  eleventyConfig.addCollection('sections', function (collectionApi) {
    return collectionApi.getFilteredByGlob('./src/sections/*').sort((a, b) => {
      const slugA = a.fileSlug;
      const slugB = b.fileSlug;

      if (slugA === 'intro') return -1;
      if (slugB === 'intro') return 1;

      return slugA.localeCompare(slugB);
    });
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      output: 'dist',
      input: 'src'
    }
  };
}
