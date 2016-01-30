var config;
(function (config) {
    // State Constants
    config.MENU_STATE = 0;
    config.PLAY_STATE = 1;
    config.OVER_STATE = 2;
    // screen constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.Width = 640;
        Screen.Hight = 480;
        Screen.Center_x = 320;
        Screen.Center_y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // game constants
    var Game = (function () {
        function Game() {
        }
        Game.FTP = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map