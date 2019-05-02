const { hooks } = require('@adonisjs/ignitor');

const loadConfigs = async () => {
  try {
    const Config = use('Config');
    const ConfigModel = use('App/Models/Config');
    const confs = (await ConfigModel.all()).toJSON();
    confs.forEach(({ key, value }) => {
      Config.set(key, value);
    });
  }
  catch (e) {
    console.log('No config yet, skipping.');
  }
};

hooks.before.httpServer(async () => {
  await loadConfigs();
});

hooks.before.aceCommand(async () => {
  await loadConfigs();
});
