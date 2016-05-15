/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'smoothie': 'vendor/smoothie/smoothie.js',
    'ng2-charts': 'vendor/ng2-charts/bundles/ng2-charts.js',
    'socket.io-client': 'vendor/socket.io-client/socket.io.js',
    'chroma-js': 'vendor/chroma-js/chroma.js',
    'plotly': 'vendor/plotly.js/dist/plotly.js',
    'phaser': 'vendor/phaser/dist/phaser.js'
};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/frequency',
    'app/time-series',
    'app/nav',
    'app/frequency-bands',
    'app/frequency-band',
    'app/topo',
    'app/music-training',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map