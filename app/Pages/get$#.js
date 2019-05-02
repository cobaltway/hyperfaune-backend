const Config = use('Config');
const Env = use('Env');
const Helpers = use('Helpers');
const serveStatic = use('serve-static');
const staticServer = Helpers.promisify(serveStatic(`${Env.get('PUBLIC_PATH')}`, { ...Config.get('app.static'), fallthrough: false }));

module.exports = {
  async handle({ request }) {
    await staticServer(request.request, request.response);
  }
};
