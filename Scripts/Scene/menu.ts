// MENU STATE
module Scene {


    export class Menu extends objects.Scene {


        private _helloLabel: createjs.Text;
        private _startbutton
        constructor() {
            super();
        }
        
        
        //public methods
        // start method
        public start(): void {
            console.log("Game Started...");

            this._helloLabel = new createjs.Text("Hello World!", "60px Consolas", "#000000");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = config.Screen.Center_x;
            this._helloLabel.y = config.Screen.Center_y;

            stage.addChild(this._helloLabel);

            stage.addChild(this);

        }

        public update(): void {
          

        }


    }

}