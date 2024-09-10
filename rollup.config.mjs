
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import ignore from 'rollup-plugin-ignore';
import replace from '@rollup/plugin-replace';

export default [
  // FOR TEST
  {
    input: 'src/browser.mjs',
    output: {
      file: 'browser/country/ip_lookup.js',
      format: 'iife',
      name: 'IpLookup',
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      ignore(["fs", "path"]),
      replace({
        preventAssignment: true,
        "__CDNURL__": false
      }),
    ]
  },
  {
    input: 'src/browser-extra.mjs',
    output: {
      file: 'browser/country-extra/ip_lookup.js',
      format: 'iife',
      name: 'IpLookup',
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      ignore(["fs", "path"]),
      replace({
        preventAssignment: true,
        "__CDNURL__": false
      }),
    ]
  },

  // FOR PRODUCTION to Browser
  {
    input: 'src/browser.mjs',
    output: {
      file: 'browser/country/ip_lookup.min.js',
      format: 'iife',
      name: 'IpLookup',
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      ignore(["fs", "path"]),
      terser(),
      replace({
        preventAssignment: true,
        "__CDNURL__": false
      }),
    ]
  },
  {
    input: 'src/browser-extra.mjs',
    output: {
      file: 'browser/country-extra/ip_lookup.min.js',
      format: 'iife',
      name: 'IpLookup',
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      ignore(["fs", "path"]),
      terser(),
      replace({
        preventAssignment: true,
        "__CDNURL__": false
      }),
    ]
  },

  // FOR PRODUCTION to require for browser use
  {
    input: 'src/browser.mjs',
    output: {
      file: 'browser/country/ip_lookup.cjs',
      format: 'cjs',
      name: 'IpLookup',
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      ignore(["fs", "path"]),
      replace({
        preventAssignment: true,
        "__CDNURL__": '"https://cdn.jsdelivr.net/npm/@iplookup/country/"'
      }),
    ]
  },
  {
    input: 'src/browser-extra.mjs',
    output: {
      file: 'browser/country-extra/ip_lookup.cjs',
      format: 'cjs',
      name: 'IpLookup',
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      ignore(["fs", "path"]),
      replace({
        preventAssignment: true,
        "__CDNURL__": '"https://cdn.jsdelivr.net/npm/@iplookup/country/"'
      }),
    ]
  },

  // FOR PRODUCTION to import for browser use
  {
    input: 'src/browser.mjs',
    output: {
      file: 'browser/country/ip_lookup.mjs',
      format: 'es',
      name: 'IpLookup',
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      ignore(["fs", "path"]),
      replace({
        preventAssignment: true,
        "__CDNURL__": '"https://cdn.jsdelivr.net/npm/@iplookup/country/"'
      }),
    ]
  },
  {
    input: 'src/browser-extra.mjs',
    output: {
      file: 'browser/country-extra/ip_lookup.mjs',
      format: 'es',
      name: 'IpLookup',
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      ignore(["fs", "path"]),
      replace({
        preventAssignment: true,
        "__CDNURL__": '"https://cdn.jsdelivr.net/npm/@iplookup/country/"'
      }),
    ]
  },
];
