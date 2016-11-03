[Angular2 la evolución de la plataforma](https://docs.google.com/presentation/d/1VyMGTwiM7HmNMdSCXrrYpHIej-Y8ZwZKCan7KMqvdCA/edit#slide=id.p)
[Hola Mundo en Angular 2](http://academia-binaria.com/hola-mundo-en-angular-2/)


## Guía

- `src\index.html` : Página raíz que contiene al componente raíz `<app-root>`
- `src\main.ts` : Fichero de arranque de la aplicación que configura y carga el módulo ráiz `AppModule`.
- `src\app\app.module.ts` : Declaración del módulo raíz y sus dependencias. Exponen al `AppComponent` para el *bootstraping* de la aplicación
- `src\app\app.component.ts` : Componente raíz `app-root`
- `src\app\app-routing.component.ts` : Se usará para definir rutas en aplicaciones SPA
- `src\app\index.ts` : Fichero índice de una carpeta, para facilitar la importación de otros ficheros


## CLI

- `angular-cli.json` : Configuracíon del CLI
- `package.json` : Rependencias y scripts 
- `tslint.json` : Reglas para código limpio
- `.editorconfig` : Configuración para el editor


### ng options
```javascript
  {
  name: 'new',
  description: `Creates a new directory and runs ${chalk.green('ng init')} in it.`,
  works: 'outsideProject',

  availableOptions: [
    { name: 'dry-run', type: Boolean, default: false, aliases: ['d'] },
    { name: 'verbose', type: Boolean, default: false, aliases: ['v'] },
    { name: 'link-cli', type: Boolean, default: false, aliases: ['lc'] },
    { name: 'skip-npm', type: Boolean, default: false, aliases: ['sn'] },
    { name: 'skip-bower', type: Boolean, default: true, aliases: ['sb'] },
    { name: 'skip-git', type: Boolean, default: false, aliases: ['sg'] },
    { name: 'directory', type: String, aliases: ['dir'] },
    { name: 'source-dir', type: String, default: 'src', aliases: ['sd'] },
    { name: 'style', type: String, default: 'css' },
    { name: 'prefix', type: String, default: 'app', aliases: ['p'] },
    { name: 'mobile', type: Boolean, default: false },
    { name: 'routing', type: Boolean, default: false },
    { name: 'inline-style', type: Boolean, default: false, aliases: ['is'] },
    { name: 'inline-template', type: Boolean, default: false, aliases: ['it'] }
  ],
  },
  {
    name: 'build',
  description: 'Builds your app and places it into the output path (dist/ by default).',
  aliases: ['b'],

  availableOptions: [
    {
      name: 'target',
      type: String,
      default: 'development',
      aliases: ['t', { 'dev': 'development' }, { 'prod': 'production' }]
    },
    { name: 'environment',    type: String,  default: '', aliases: ['e'] },
    { name: 'output-path',    type: 'Path',  default: null, aliases: ['o'] },
    { name: 'watch',          type: Boolean, default: false, aliases: ['w'] },
    { name: 'watcher',        type: String },
    { name: 'suppress-sizes', type: Boolean, default: false },
    { name: 'base-href',      type: String,  default: null, aliases: ['bh'] },
    { name: 'aot',            type: Boolean, default: false }
  ],
  },
  {
     name: 'serve',
  description: 'Builds and serves your app, rebuilding on file changes.',
  aliases: ['server', 's'],

  availableOptions: [
    { name: 'port',                 type: Number,  default: defaultPort,   aliases: ['p'] },
    {
      name: 'host',
      type: String,
      default: 'localhost',
      aliases: ['H'],
      description: 'Listens only on localhost by default'
    },
    { name: 'proxy-config',         type: 'Path',                          aliases: ['pc'] },
    { name: 'watcher',              type: String,  default: 'events',      aliases: ['w'] },
    { name: 'live-reload',          type: Boolean, default: true,          aliases: ['lr'] },
    {
      name: 'live-reload-host',
      type: String,
      aliases: ['lrh'],
      description: 'Defaults to host'
    },
    {
      name: 'live-reload-base-url',
      type: String,
      aliases: ['lrbu'],
      description: 'Defaults to baseURL'
    },
    {
      name: 'live-reload-port',
      type: Number,
      aliases: ['lrp'],
      description: '(Defaults to port number within [49152...65535])'
    },
    {
      name: 'live-reload-live-css',
      type: Boolean,
      default: true,
      description: 'Whether to live reload CSS (default true)'
    },
    {
      name: 'target',
      type: String,
      default: 'development',
      aliases: ['t', { 'dev': 'development' }, { 'prod': 'production' }]
    },
    { name: 'environment',          type: String,  default: '', aliases: ['e'] },
    { name: 'ssl',                  type: Boolean, default: false },
    { name: 'ssl-key',              type: String,  default: 'ssl/server.key' },
    { name: 'ssl-cert',             type: String,  default: 'ssl/server.crt' },
    { name: 'aot',                  type: Boolean, default: false },
    {
      name: 'open',
      type: Boolean,
      default: false,
      aliases: ['o'],
      description: 'Opens the url in default browser',
    },
  ],
  }
``` 