import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from './app/app.module'

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});


import hmrAccept from './hmr-accept';

hmrAccept(module);

