import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { config, LIB_NAME, PATH_DIST }  from './rollup.config.js';

config.output.format = "es";
config.output.file = PATH_DIST + LIB_NAME + ".full.js";
delete config.external;

config.plugins = [
  resolve({
    main: true,
    module: true
  }),
  commonjs({
    include: [ 'node_modules/**' ],
    namedExports: {
      'lodash': [
        'isEqual',
        'defaults',
        'cloneDeep',
        'clone',
        'remove',
        'find',
        'defaultsDeep',
        'merge',
        'uniqueId',
        'size',
        'get',
        'filter',
        'orderBy'
      ],
      '@swimlane/ngx-datatable': [
        'NgxDatatableModule'
      ],
      'c3': [
        'generate'
      ],
      'd3': [
        'select'
      ]
    }
  })
];

export default config;
