# ember-cli-deploy-html-version

> An ember-cli-deploy plugin to add a version attribute to the html tag of the index.html page.

<hr/>
**WARNING: This plugin is only compatible with ember-cli-deploy versions >= 0.5.0**
<hr/>

This plugin adds a `data-app-version` attribute on the `html` tag of the index.html page.  It versions the tag file using the [ember-cli-deploy-revision-data][3] plugin.

## Quick Start
To get up and running quickly, do the following:

- Ensure [ember-cli-deploy-build][1] and [ember-cli-deploy-revision-data][3] are installed and configured.

- Install this plugin

```bash
$ ember install ember-cli-deploy-html-version
```

- Run the pipeline

```bash
$ ember deploy
```


## ember-cli-deploy Hooks Implemented

For detailed information on what plugin hooks are and how they work, please refer to the [Plugin Documentation][1].

- `configure`
- `didPrepare`


## Prerequisites

The following properties are expected to be present on the deployment `context` object:

- `distDir`                     (provided by [ember-cli-deploy-build][2])
- `revisionData`                (provided by [ember-cli-deploy-revision-data][3])

## Running Tests

- `npm test`

[1]: http://ember-cli.github.io/ember-cli-deploy/plugins "Plugin Documentation"
[2]: https://github.com/ember-cli-deploy/ember-cli-deploy-build "ember-cli-deploy-build"
[3]: https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data "ember-cli-deploy-revision-data"
