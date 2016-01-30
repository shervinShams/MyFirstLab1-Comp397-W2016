module objects {
    export class Scene extends createjs.Container {
        constructor() {
            super();
            this.start();
        }
        // add game object to my scene 
        public start():void {
            stage.addChild(this);
        }
        // update game objects to my scene
        public update():void {
            
        }
        
    }
    
}